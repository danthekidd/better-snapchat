import './index.css';
import { logInfo } from './lib/debug';

(async () => {
  const { hostname, pathname } = new URL(location.href);
  if (!['web.snapchat.com', 'www.snapchat.com'].includes(hostname)) {
    return;
  }

  if (hostname === 'www.snapchat.com' && !pathname.startsWith('/web')) {
    return;
  }

  logInfo(`BetterSnap v${process.env.VERSION}`);

  // @ts-ignore glob import
  import('./patches/*.ts');

  if (document.readyState === 'complete') {
    // @ts-ignore glob import
    import('./modules/**/index.ts');
  } else {
    // @ts-ignore glob import
    document.addEventListener('DOMContentLoaded', () => import('./modules/**/index.ts'), { once: true });
  }
})();
