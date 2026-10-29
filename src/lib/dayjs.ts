import dayjs from "dayjs";
import ja from "dayjs/locale/ja";

dayjs.locale(ja);
export const HomeToday = dayjs().format("MM/DD(ddd)");
