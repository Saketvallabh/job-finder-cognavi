// import styles from './styles.module.css'

export default function Faq () {
    const faq = [
        {
            Q: "Will anyone know that I’m a Job Seeker Premium subscriber?",
            A: "Nobody will know that you’re a Job Seeker Premium subscriber unless you choose to call this out explicitly in your profile.. No notifications will be sent out to your connections when you upgrade. If you choose to join the Job Seeker Premium Group, only other Job Seeker Premium subscribers can see your group membership and activity."
        },
        {
            Q: "Can I really cancel my Premium account at any time?",
            A: "You can easily cancel or downgrade your Premium account at any time by visiting our website and clicking “Downgrade or cancel subscription” under Account Type. There are no cancellation fees. Cancellation will end billing and remove your access to any Premium features at the end of your current billing cycle. Changes will be effective on the billing expiration date of your current Premium subscription. You'll be notified once your request has been processed."
        }, 
        {
            Q: "How do I apply to jobs as a Featured Applicant?",
            A: "The Featured Applicant feature applies to all job applications submitted on JobFinder.com. Applying to a job as a Featured Applicant will put your job application ahead of non Job Seeker Premium subscribers.  This increases your chance of your application getting viewed."
        },
        {
            Q: "What can I use my InMail credits for?",
            A: "InMail credits are used to send messages to anyone on jobFinder, even if you’re not connected to them. InMail is  a great way to reach hiring managers or recruiters at companies where you'd like to work. You can use them to follow up on job applications, network with recruiters, ask for an informational interview, or simply start a conversation with an industry leader or alumni you’d like to meet."
        }
    ]
    return (
        <>
            <div className="flex flex-col w-4/5 justify-center min-h-dykc py-5 px-8 bg-gradient-to-t from-abUscone to-abUsctwo">
                <div className="flex justify-center mt-5 mb-5 w-11/12">
                    <span className="text-3xl font-semibold text-black">FAQs</span>
                </div>
                {faq.map((item) => {
                    return (
                        <>
                            <div className="flex flex-col justify-start mb-5 w-11/12">
                                <span className="text-xl font-semibold text-black">{item.Q}</span>
                                <span className="text-base font-normal text-faqa">{item.A}</span>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

//className={styles.QnAContainer}
//className={styles.faqHeadingContainer}
//className={styles.faqHeading}
//className={styles.questionAnsContainer}
//className={styles.question}
//className={styles.answer}