import { CronJob } from 'cron'

var job = new CronJob(
    '00 00 00 * * *',
    function () {
        console.log('Maintain the api 😊')
    },
    null,
    true,
    'Asia/Ho_Chi_Minh'
)
job.start()
