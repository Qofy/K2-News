import { DUMMY_NEWS } from '@/dummy-news';

let dbInstance = null;

async function getDb() {
  if (dbInstance) return dbInstance;
  try {
    const mod = await import('better-sqlite3');
    const sql = mod.default ?? mod;
    dbInstance = sql('data.db');
    return dbInstance;
  } catch (err) {
    console.error('better-sqlite3 not available, falling back to DUMMY_NEWS', err);
    return null;
  }
}

export async function getAllNews() {
  const db = await getDb();
  if (!db) return DUMMY_NEWS;
  try {
    const news = db.prepare('SELECT * FROM news').all();
    return news;
    await  new Promise(resolve => setTimeout(resolve, 2000));
  } catch (err) {
    console.error('Query failed, falling back to DUMMY_NEWS', err);
    return DUMMY_NEWS;
  }
}

export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears() {
  return DUMMY_NEWS.reduce((years, news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year) {
  return DUMMY_NEWS.reduce((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year) {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(year, month) {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}