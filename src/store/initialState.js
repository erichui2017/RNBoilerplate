import I18n from '../i18n';


const initialState = {
  locale: 'zh',
  mainTabHomeBadge: 3,
  slideShows: ['avatar.jpg','avatar2.jpg','avatar3.jpg']
};

// 设置默认locale
I18n.locale = initialState.locale;

export default initialState;
