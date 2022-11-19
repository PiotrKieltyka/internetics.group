import { Application, Context, oakCors, Router, send } from './deps.ts';

const serverPort = Deno.env.get('MAILSERVER_PORT') as string;
const serverSecret = Deno.env.get('MAILSERVER_SECRET') as string;
const serverOrigins = Deno.env.get('MAILSERVER_ORIGINS') as string;
const originsWhiteList = serverOrigins.split(',');
const acme = Deno.env.get('ACME_CHALLENGE').split('.');
const router = new Router();

router
  .get('/.well-known/acme-challenge/' + acme[0], (context: Context) => {
    context.response.body = acme[0] + '.' + acme[1];
  })
  .get('/', async (context: Context) => {
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}/static`,
      index: 'index.html',
    });
  })
  .get('/favicon.ico', async (context: Context) => {
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}/static`,
      index: 'favicon.ico',
    });
  })
  .get('/robots.txt', async (context: Context) => {
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}/static`,
      index: 'robots.txt',
    });
  })
  .get('/sitemap.xml', async (context: Context) => {
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}/static`,
      index: 'sitemap.xml',
    });
  })
 .post('/mail', 
  oakCors({
    origin: originsWhiteList,
    methods: ['GET', 'POST', 'OPTIONS'],
    optionsSuccessStatus: 200,
  }),
  async (context: Context) => {
    const { message, secret, fromName, replyTo, subscriptionPlan } = await context.request.body().value;
    if (serverSecret === secret) {
      console.log('Message is on the way.');
      const template = (subscriptionPlan === 'null' ? 'internetics_msg' : 'internetics_subscr');
      await fetch('https://' + Deno.env.get('SERVICE_URL') as string, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: Deno.env.get('SERVICE_ID') as string,
          template_id: template as string,
          user_id: Deno.env.get('USER_ID') as string,
          accessToken: Deno.env.get('ACCESS_TOKEN') as string,
          template_params: {
            reply_to: replyTo as string,
            from_name: fromName as string,
            to_name: Deno.env.get('EMAIL_RECIPIENT') as string,
            subscription_plan: subscriptionPlan as string,
            message: message as string,
          }
        }),
      })
      context.response.status = 200;
      context.response.type = 'application/json';
      context.response.body = { message: 'Task ended successfully.' };
    } else {
      context.response.status = 418;
      context.response.type = 'application/json';
      context.response.body = { message: 'Task failed successfully.' };
    };
  })
  .options('/mail', oakCors());

const app = new Application();
app.use(router.routes());

console.info('CORS-enabled web server listening on port ', serverPort);
await app.listen({ port: Number(serverPort) });
