import { reactive } from 'vue';
import axios from 'axios';

let emails = reactive(new Set())

export const useEmailSelection = function () {
    let toggle = function (email) {
        if (emails.has(email)) {
            emails.delete(email)
        } else {
            emails.add(email)
        }
    }

    let clear = () => {
        emails.clear()
    }

    let addMultiple = (newEmails) => {
        newEmails.forEach((email) => {
            emails.add(email)
        })
    }

    let markRead = () => {
        emails.forEach((email) => {
            email.read = true;
            // axios.put(`http://localhost:3000/emails/${email.id}`, email)
        })
    }

    let markUnread = () => {
        emails.forEach((email) => {
            email.read = false;
            // axios.put(`http://localhost:3000/emails/${email.id}`, email)
        })
    }

    let archive = () => {
        emails.forEach((email) => {
            email.archived = true;
            // axios.put(`http://localhost:3000/emails/${email.id}`, email)
        })
    }

    return {
        emails,
        toggle,
        clear,
        addMultiple,
        markRead,
        markUnread,
        archive
    }
}

export default useEmailSelection