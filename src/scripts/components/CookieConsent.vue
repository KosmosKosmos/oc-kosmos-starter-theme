<template>
    <transition name="fade">
        <div v-if="show" id="cookie-consent" role="dialog">
            <div class="uk-flex-between uk-flex uk-light">
                <div @click="dismiss" class="uk-margin-right"><slot name="message"></slot></div>
                <div @click="dismiss" style="display: block"><slot name="button"></slot></div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'CookieConsent',
        props: {
            cookieName: {type: String, default: 'cookieconsent_status'},
            cookiePath: {type: String, default: '/'},
            cookieDomain: {type: String, default: ''},
            cookieExpiryDays: {type: Number, default: 365}
        },
        data() {
            return {
                show: undefined
            }
        },
        computed: {
            cookie() {
                return !this.getCookie(this.cookieName)
            }
        },
        beforeMount() {
            this.show = this.cookie
        },
        methods: {
            dismiss() {
                this.show = false;
                this.setCookie(this.cookieName, 1, this.cookieExpiryDays, this.cookieDomain, this.cookiePath)
            },
            getCookie(name) {
                const value = `; ${document.cookie}`;
                const parts = value.split(`; ${name}=`);

                return parts.length !== 2 ?
                    undefined :
                    parts.pop().split(';').shift()
            },
            setCookie(name, value, expiryDays, domain, path) {
                const exdate = new Date();
                exdate.setDate(exdate.getDate() + (expiryDays || 365));

                const cookie = [
                    `${name}=${value}`,
                    `expires=${exdate.toUTCString()}`,
                    `path=${(path || '/')}`
                ];

                if (domain) {
                    cookie.push(`domain=${domain}`);
                }

                document.cookie = cookie.join(';');
            }
        }
    }
</script>
<style lang="scss">
    @import "../../styles/variables";
    #cookie-consent {
        padding: 25px;
        position: fixed;
        bottom: 10px;
        z-index: 4000;
        left: 10px;
        border-radius: 5px;
        box-shadow: 0 -3px 32px rgba(0,0,0,.16);
        max-width: 24em;
        background-color: $global-secondary-background;
    }
</style>
