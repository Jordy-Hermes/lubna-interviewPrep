document.addEventListener('DOMContentLoaded', function () {

    var faqData = [
        {
            question: "Tell me about yourself ?",
            description: "This is your opportunity to provide a brief overview of your background, experiences, and interests. You can start with your education and relevant work experience, highlighting key accomplishments and skills. Then, you can mention why you're interested in the role and how your past experiences have prepared you for it.",
            answer: "Answers to questions about yourself."
        },
        {
            question: "What are your strengths and weaknesses ?",
            description: "When discussing strengths, focus on qualities or skills that are relevant to the workplace and the specific job you're applying for. ",
            answer: "My strengths lie in my strong communication skills, ability to work well in a team, and attention to detail. I excel in building relationships with colleagues and stakeholders, which allows me to effectively collaborate and achieve common goals.|| Potential Answer (Weaknesses) Potential Answer (Weaknesses) One area I have identified for improvement is my tendency to get overly invested in projects, which can sometimes lead to perfectionism and spending too much time on minor details"
           
        },
        {
            question: "Can you explain what you understand about the role of an Event Campaign Manager focusing on social media, and how you see yourself fitting into this role?",
            description: "This question aims to gauge the candidate's understanding of the responsibilities involved in managing social media campaigns for events.",
            answer: "As an Event Campaign Manager focusing on social media, I understand that my role involves developing and executing social media strategies to promote events, engage with the target audience, and drive attendance. I see myself fitting into this role by leveraging my expertise in social media marketing, creative content development, and data analysis to create impactful campaigns that resonate with our audience and achieve our event objectives."
        },
        {
            question: "How do you approach the development of a social media strategy for promoting events?",
            description: "This question assesses the candidate's strategic thinking and planning skills specifically related to social media campaign development for events.",
            answer: "When developing a social media strategy for promoting events, I start by conducting thorough research to understand our target audience, their interests, and preferred platforms. I then define clear objectives and key performance indicators (KPIs) for the campaign. Next, I create engaging content tailored to each social media platform and develop a content calendar to ensure consistency and relevance. Throughout the campaign, I monitor performance metrics, analyze data, and make adjustments as needed to optimize results and achieve our goals."
        },
        {
            question: "How do you engage with the audience and build a community around events on social media platforms?",
            description: "This question evaluates the candidate's ability to foster engagement and create a sense of community among event attendees and potential participants through social media channels.",
            answer: "To engage with the audience and build a community around events on social media, I prioritize interaction and conversation. I respond promptly to comments, messages, and mentions, encouraging two-way communication and fostering a sense of connection. Additionally, I leverage user-generated content, such as event photos and testimonials, to showcase attendee experiences and encourage participation. By creating a welcoming and interactive online environment, we can build a loyal community of event enthusiasts and advocates."
        },
        {
            question: "How do you measure the success of social media campaigns for events, and what metrics do you prioritize in your analysis?",
            description: "This question examines the candidate's approach to measuring and evaluating the effectiveness of social media campaigns, as well as their understanding of relevant performance metrics.",
            answer: "When measuring the success of social media campaigns for events, I look at a variety of metrics to assess performance and impact. These may include reach, engagement rate, click-through rate, conversion rate, and overall ROI. I prioritize metrics that directly align with our campaign objectives, such as event registrations, ticket sales, or brand awareness. By analyzing these metrics, I can identify areas of strength and areas for improvement, allowing us to refine our strategies and optimize future campaigns for greater success."
        },
        {
            question: "Can you provide an example of a crisis or negative situation that occurred during a social media campaign for an event, and how you handled it?",
            description: "This question evaluates the candidate's ability to remain calm under pressure, problem-solve effectively, and manage crisis situations that may arise during social media campaigns.",
            answer: "During a social media campaign for an event, we encountered a situation where misinformation about the event venue spread rapidly on Twitter, causing confusion and concern among attendees. In response, I immediately issued a public statement addressing the issue, providing accurate information, and reassuring attendees of the event's location and safety measures. Simultaneously, I monitored social media channels closely, actively engaging with individuals who had questions or concerns to provide timely updates and address any misinformation. By swiftly and transparently addressing the situation, we were able to mitigate potential negative impacts and maintain attendee trust and confidence in the event."
        },
        {
            question: "What do you know about our company?",
            description: "This question assesses the candidate's level of preparation, research skills, and interest in the company.",
            answer: "I've done extensive research on [Company Name] and am impressed by its commitment to [mention specific aspect such as blablablabla"
        }
        ,
        {
            question: "Why should we keep you?",
            description: "This question aims to assess the candidate's self-confidence, value proposition, and understanding of their contribution to the company.",
            answer: "I believe that my unique combination of skills, experiences, and qualities makes me a valuable asset to the team. Throughout my career, I have consistently demonstrated [mention specific skills or qualities, e.g., strong problem-solving abilities, excellent communication skills, leadership capabilities, etc.] which have contributed to the success of projects and initiatives."
        },

    ];


    function generateAccordion() {
        var accordion = document.getElementById("accordion");
        faqData.forEach(function(item) {
            var accordionItem = document.createElement("div");
            accordionItem.classList.add("accordion-item");

            var button = document.createElement("button");
            button.classList.add("accordion-btn");
            button.textContent = item.question;

            var panel = document.createElement("div");
            panel.classList.add("panel");
            panel.textContent = item.description; 

            accordionItem.appendChild(button);
            accordionItem.appendChild(panel);
            accordion.appendChild(accordionItem);
        });
    }

    generateAccordion();


    var acc = document.getElementsByClassName("accordion-btn");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});
