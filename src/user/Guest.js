/**
 * 
 */

import User from "./User";

export default class Guest extends User {
    constructor() {

    }

    createWaitingRoom() {
        return 0;
    }

    destroyWaitingRoom() {
    }

    choosePsychologist(psychologist) {
    }

    enterCounselRoom(no){
    }

    leaveCounselRoom(no) {
    }
}
