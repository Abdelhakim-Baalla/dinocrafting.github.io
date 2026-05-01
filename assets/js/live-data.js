document.addEventListener('DOMContentLoaded', async () => {
  const channelId = 'UCboeGauwIyfDKiYDhhTHgyA';
  const socialBladeUrl = `https://img.shields.io/youtube/channel/subscribers/${channelId}.json`;
  const videoCountUrl = `https://img.shields.io/youtube/channel/views/${channelId}.json`;
  const bloggerFeedUrl = 'https://dinocrafting9988.blogspot.com/feeds/posts/default?alt=json&max-results=1';

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
    const subscribersRes = await fetch(socialBladeUrl);
    if (subscribersRes.ok) {
      const subscribersData = await subscribersRes.json();
      const subsValue = parseBadgeValue(subscribersData.value);
      if (subsValue) setStat('youtube-subscribers', subsValue);
    }
  } catch (error) {
    console.warn('YouTube subscribers fetch failed:', error);
  }

  try {
    const viewsRes = await fetch(videoCountUrl);
    if (viewsRes.ok) {
      const viewsData = await viewsRes.json();
      const viewsValue = parseBadgeValue(viewsData.value);
      if (viewsValue) setStat('youtube-videos', viewsValue);
    }
  } catch (error) {
    console.warn('YouTube videos/views fetch failed:', error);
  }

  try {
    const blogRes = await fetch(bloggerFeedUrl);
    if (blogRes.ok) {
      const blogData = await blogRes.json();
      const total = blogData?.feed?.openSearch$totalResults?.$t;
      if (total) setStat('blog-posts', total);
    }
  } catch (error) {
    console.warn('Blogger stats fetch failed:', error);
  }

  // If no public endpoint exists, keep this manual fallback synced with community reality.
  if ([...document.querySelectorAll('[data-stat="discord-members"]')].every((el) => el.textContent === '0')) {
    setStat('discord-members', 'n/a');
  }
});
