import Picker from '../picker';
import DatePanel from '../panel/date';
import DateRangePanel from '../panel/date-range';
import MonthRangePanel from '../panel/month-range';

export default {
  mixins: [Picker],

  name: 'ElDatePicker',

  props: {
    type: {
      type: String,
      default: 'date'
    },
    timeArrowControl: Boolean
  },

  computed: {
    panel() {
      const type = this.type;
      if (type === 'daterange' || type === 'datetimerange') {
        return DateRangePanel;
      } else if (type === 'monthrange') {
        return MonthRangePanel;
      }
      return DatePanel;
    }
  }
};
