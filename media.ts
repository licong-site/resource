import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess, resultSuccess } from '../_util';

const list = (() => {
  const result: any[] = [];
  for (let index = 0; index < 60; index++) {
    result.push({
      id: `${index}`,
      title: `CCTV-${index}`,
      'status|1': [0, 1],
      type: (index % 3) + 1,
      description: '直播频道，。。。。。。。',
      url: 'https://ss.com/stream/22.m3u8',
      onlineTime: '@datetime',
    });
  }
  return result;
})();

const info = {
  id: 999,
  title: `CCTV-13`,
  status: 1,
  type: 1,
  description:
    '中央电视台新闻频道（CCTV-13）全天24小时播出，以最快的速度向观众提供第一手的国际国内新闻资讯',
  url: 'https://ss.com/stream/999/1.m3u8',
  onlineTime: '@datetime',
};

export default [
  {
    url: '/api/v1/streamlist',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, list);
    },
  },
  {
    url: '/api/v1/stream',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(info);
    },
  },
  {
    url: '/api/v1/stream',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess(info);
    },
  },
  {
    url: '/api/v1/stream/999',
    timeout: 1000,
    method: 'put',
    response: () => {
      return resultSuccess(info);
    },
  },
  {
    url: '/api/v1/stream/1',
    timeout: 1000,
    method: 'delete',
    response: () => {
      return resultSuccess(info);
    },
  },
] as MockMethod[];
