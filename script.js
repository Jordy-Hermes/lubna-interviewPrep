document.addEventListener('DOMContentLoaded', function () {

    var faqData = [
        {
            question: "Soft Skills",
            description: "Questions about teamwork, communication, problem-solving, and adaptability.",
            answer: "Answers to questions about teamwork, communication, problem-solving, and adaptability."
        },
        {
            question: "Technical Skills",
            description: "Questions about programming languages, tools, and technologies.",
            answer: "Answers to questions about programming languages, tools, and technologies."
        },
        {
            question: "Company Policies",
            description: "Questions about company policies, procedures, and guidelines.",
            answer: "Answers to questions about company policies, procedures, and guidelines."
        }

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
            panel.textContent = item.answer; 

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
