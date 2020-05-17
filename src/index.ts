import "./utils"
import WhatsApp from "./whatsapp";
import { Color } from "./utils";

const wa = new WhatsApp();
wa.connect().then(
    info => {
        console.log('Connected to whatsapp:',
            info.pushname,
            info.phone.device_manufacturer,
            info.phone.device_model
        );
    }
).catch(err => console.error(err))

wa.on('Msg', (data) => {
    L(Color.m('::'), 'Msg', data)
})

wa.on('Presence', (data) => {
    L(Color.m('::'), 'Presence', data)
})

wa.on('disconnect', (kind) => {
    L(Color.m('::'), 'disconnect', kind)
})

wa.on('replaced', () => {
    L(Color.m('::'), 'replaced Login in another web whatsapp')
})

wa.on('timeskew', (ts) => {
    L(Color.m('::'), 'timeskew', ts)
})

wa.on('close', (code, reason) => {
    L(Color.m('::'), 'close', code, reason)
})
wa.on('chats-loaded', chats => {
    console.log('::chats-loaded', chats[0], chats[chats.length - 1]);

})