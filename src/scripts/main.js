import Vue from 'vue$';
import UIkit from 'uikit';
import UIKitIcons from 'uikit/dist/js/uikit-icons.js';
import CookieConsent from './components/CookieConsent';
import '../styles/main.scss';

Vue.config.devtools = false;
Vue.config.productionTip = false;
UIkit.use(UIKitIcons);
window.UIkit = UIkit;

new Vue({
    components:{CookieConsent},
    data() {return {showContact: false, showNewsletter: false}},
    methods: {
        openContact() {
            this.showContact = !this.showContact;
            setTimeout(() => {
                document.getElementById('footer').scrollIntoView(true);
            }, 100);
        },
        openNewsletter() {
            this.showNewsletter = !this.showNewsletter;
            setTimeout(() => {
                document.getElementById('footer').scrollIntoView(true);
            }, 100);
        }
    }
}).$mount('#app');
