import {BehaviorSubject} from 'rxjs';

//establishes initial value and emits the current value to new subscribers
const eventsStream = new BehaviorSubject({open: false, jobApp: null})

const jobAppDetail = {

    open: (jobApp)=>{
        /*when we click on the pending job apps from dashboard and trigger the open method, 
        we then push a new event that will say that the open property is true and pass the job detail we want
        to see in the dialog
        */
        eventsStream.next({ open: true, jobApp})
    },
    close: (jobApp)=>{
        eventsStream.next({ open: false, jobApp: null})
    },
    // exposes this event stream as an observable for our components to subscribe to these events and listen to whether a dialogue is open or closed
    eventsStream: eventsStream.asObservable()
};

export default jobAppDetail;