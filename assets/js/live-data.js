document.addEventListener('DOMContentLoaded', async () => {
  const channelId = 'UCboeGauwIyfDKiYDhhTHgyA';
  const socialBladeUrl = `https://img.shields.io/youtube/channel/subscribers/${channelId}.json`;
  const videoCountUrl = `https://img.shields.io/youtube/channel/views/${channelId}.json`;

  const setStat = (key, value) => {
    document.querySelectorAll(`[data-stat="${key}"]`).forEach((el) => {
      el.textContent = value;
    });
  };

  const parseBadgeValue = (raw) => {
    if (!raw) return null;
    return raw.replace(/\s*(subscribers|views)\s*$/i, '').trim();
  };

  try {
    const cachedRes = await fetch('/api/stats.json', { cache: 'no-store' });
    if (cachedRes.ok) {
      const cached = await cachedRes.json();
      if (cached?.youtube?.subscribers) setStat('youtube-subscribers', cached.youtube.subscribers);
      if (cached?.youtube?.views) setStat('youtube-videos', cached.youtube.views);
      if (typeof cached?.news?.total_posts === 'number') setStat('blog-posts', `${cached.news.total_posts}`);
      if (cached?.discord?.members_online) setStat('discord-members', `${cached.discord.members_online}`);
      if (cached?.modrinth?.flowinventory_downloads) setStat('flowinventory-downloads', `${cached.modrinth.flowinventory_downloads}`);

      if (cached?.youtube?.latest_video) {
        document.querySelectorAll('[data-latest-video-title]').forEach((el) => {
          el.textContent = cached.youtube.latest_video.title || 'Latest upload';
        });
        document.querySelectorAll('[data-latest-video-link]').forEach((el) => {
          el.href = cached.youtube.latest_video.url || 'https://www.youtube.com/@Dinocrafting';
        });
        document.querySelectorAll('[data-latest-video-thumb]').forEach((el) => {
          el.src = cached.youtube.latest_video.thumbnail || '';
        });
      }
      return;
    }
  } catch (error) {
    console.warn('Cached stats fetch failed:', error);
  }

  try {
    const subscribersRes = await fetch(socialBladeUrl);
    if (subscribersRes.ok) {
      const subscribersData = await subscribersRes.json();
      const subsValue = parseBadgeValue(subscribersData.value);
      if (subsValue) setStat('youtube-subscribers', subsValue);
    }
  } catch {}

  try {
    const viewsRes = await fetch(videoCountUrl);
    if (viewsRes.ok) {
      const viewsData = await viewsRes.json();
      const viewsValue = parseBadgeValue(viewsData.value);
      if (viewsValue) setStat('youtube-videos', viewsValue);
    }
  } catch {}

  if ([...document.querySelectorAll('[data-stat="discord-members"]')].every((el) => el.textContent === '--' || el.textContent === '0')) {
    setStat('discord-members', 'n/a');
  }
});
