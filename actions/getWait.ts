import { wait } from '@/lib/wait';


const getWait  = async() => {
    wait(3500)
    return 100
}

export default getWait;