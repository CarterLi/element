import Picker from '../picker';
import TimePanel from '../panel/time';
import TimeRangePanel from '../panel/time-range';

export default {
  mixins: [Picker],

  name: 'ElTimePicker',

  props: {
    isRange: Boolean,
    arrowControl: Boolean
  },

  computed: {
    type() {
      return this.isRange ? 'timerange' : 'time';
    },

    panel() {
      return this.isRange ? TimeRangePanel : TimePanel;
    }
  },
};
