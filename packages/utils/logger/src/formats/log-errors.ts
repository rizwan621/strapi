import { format, Logform } from 'winston';
import { inspect } from 'util';
import { pick } from 'lodash';

const logErrors: Logform.FormatWrap = format((info) => {
  if (info instanceof Error) {
    const { timestamp, message, stack, level, name, ...rest } = info;

    const errorMetas = inspect(pick(rest, Object.keys(rest)), {
      depth: 1,
      colors: true,
    });

    const msg = `${message}${stack ? `\n${stack}` : ''}${errorMetas ? `\n${errorMetas}` : ''}`;

    return { ...info, message: msg };
  }

  return info;
});

export default logErrors;
