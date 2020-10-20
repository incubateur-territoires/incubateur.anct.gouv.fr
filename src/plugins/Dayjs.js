import Vue from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import fr from 'dayjs/locale/fr';

dayjs.extend(relativeTime)
dayjs.locale(fr)

Object.defineProperties(Vue.prototype, {
  $date: {
    get() {
      return dayjs
    }
  }
});
