import insta from '@/assets/icons/insta.png'
import fb from '@/assets/icons/fb.png'
import ytube from '@/assets/icons/ytube.png'
import mail from '@/assets/icons/tabler_mail.png'
import address from '@/assets/icons/address_icon.png'
import phone from '@/assets/icons/mage_phone-call.png'

export function Footer() { 
    return /*html*/`
        <footer class="footer">
        <h3 id="footer-connect">CONNECT WITH US</h3>
        <div id="row3">
            <div id="phone">
                <img src="${phone}">
                <span> +420 606 384 665</span>
            </div>
            <div id="social">
                <img src="${insta}">
                <img src="${fb}">
                <img src="${ytube}">
            </div>
            <div id="email">
                <img src="${mail}">
                <span> victoria.dreamlife@gmail.com</span>
            </div>
        </div>
        <div id="footer-address"><img src="${address}"> <span>Blanická 19-13, 120 00 Vinohrady</span></div>
    </footer>
    `
}