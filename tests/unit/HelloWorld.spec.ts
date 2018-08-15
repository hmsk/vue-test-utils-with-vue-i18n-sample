import { mount, config, createLocalVue } from '@vue/test-utils'
import VueI18n from 'vue-i18n'
import HelloWorld from '@/components/HelloWorld.vue'

config.logModifiedComponents = false
const localVue = createLocalVue()
localVue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: {
      router: 'vue-router',
      store: 'vuex',
      dev: 'vue-devtools',
      webpack: 'vue-loader',
      ref: 'awesome-vue'
    }
  }
})

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const propsData = { msg: 'new message' }
    const wrapper = mount(HelloWorld, {
      localVue,
      i18n,
      ...{ propsData }
    })
    expect(wrapper.text()).toMatch('new message')
  })
})
