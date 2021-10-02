document.addEventListener('DOMContentLoaded', function() {
    
    const btn = document.getElementById('btn')
    console.log(btn)
    const paragraphe = document.getElementById('paragraphe')

    if (btn) {
        btn.addEventListener('click', function() {
            console.log('eeeeeeeeee')
            paragraphe.style.display = "block";
        })
    }
    

}, false);

// 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