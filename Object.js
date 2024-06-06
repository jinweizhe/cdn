// 使用方法: https://www.yuque.com/jinweizhe/oppfph/meqhoe9hkosyo2b3?singleDoc# 《Object.js使用》

export function parseURL(url) {
    const result = {
      path: [],
      params: [],
    };

    const parts = url.split('?');
    result.path.push(parts[0]);

    if (parts.length > 1) {
      const paramsStr = parts[1];
      const paramsArray = paramsStr.split('&');
      paramsArray.forEach(param => {
        const keyValue = param.split('=');
        result.params.push({
          [keyValue[0]]: keyValue[1],
        });
      });
    }
    return result;
  }
