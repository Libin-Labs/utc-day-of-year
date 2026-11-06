import * as api from '@lp-labs/utc-day-of-year';
import { dayOfYear } from '@lp-labs/utc-day-of-year';
console.log(dayOfYear('2024-12-31'));
// @ts-expect-error invalid argument must be rejected by declarations
api.dayOfYear(20240101);
