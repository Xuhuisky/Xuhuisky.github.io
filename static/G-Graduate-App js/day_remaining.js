function calculateDaysRemaining() {
            const today = new Date();

            document.querySelectorAll('.due-date').forEach(function (element) {
                const dueDateStr = element.set.dueDate;
                const dueDate = new Date(dueDateStr);
                const timeDiff = dueDate.getTime() - today.getTime();
                const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

                // Show the countdown result with application due date
                element.innerHTML = dueDateStr + " (" + (daysRemaining >= 0 ? daysRemaining + " days remaining" : "Past Due") + ")";
            });
        }

        // Run the function after the DOM content is loaded
        document.addEventListener('DOMContentLoaded', calculateDaysRemaining);