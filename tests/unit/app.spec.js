import { mount } from '@vue/test-utils';
import App from '@/App.vue';

test('app match with snapshot', () => {
  const wrapper = mount(App);

  expect(wrapper.element).toMatchSnapshot();
});
