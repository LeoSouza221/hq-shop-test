import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

test('home match with the snapshot', () => {
  const wrapper = mount(Home);

  expect(wrapper.element).toMatchSnapshot();
});

test('have a teste text', () => {
  const wrapper = mount(Home);

  expect(wrapper.text()).toBe('teste');
});

