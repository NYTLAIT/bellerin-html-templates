// FOR READ MORE
document.getElementById("sypnosis-btn").addEventListener("click", function (){
    const sypnosis = document.getElementById("sypnosis")
    sypnosis.classList.toggle("sypnosis-container")
} )

//FOR QUERY CONFIRM SOMEPOINT MAYBE
/* document.getElementById("goal-type").addEventListener("select", function (){
    const selectGoal = document.getElementById("select-goal-type")
    const inputGoal = document.getAnimations("goal-input")
    const startBtn = document.getAnimations("query-confirm-btn")
    const selectDefaultOption = document.getElementById("select-goal-default")
    
    selectGoal.hidden = False
    selectGoal.addEventListener("click", () => {
        selectDefaultOption.hidden = True
        if (selectGoal.value == "Time-Goal") {
            inputGoal.innerHTML = "
            <label>
            "
        }
        else if (selectGoal.value == "Eps-Goal") {
            inputGoal.innerHTML = "
            
            "
        }
    })
}) */