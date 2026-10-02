 document.getElementById('btn-update').addEventListener('click',function(){
            const pageTiltleElements = document.getElementById('page-title')
            console.log(pageTiltleElements);
            pageTiltleElements.innerText = 'Updated Page Title'
            
        })
        // 2nd way
         document.getElementById('login-btn').addEventListener('click',function(){
            // console.log('login-btn-clicked');
            const userInfoEl = document.getElementById('user-info')
            console.log(userInfoEl);
            userInfoEl.innerText = 'Login Successfully'
        })
        // 3rd way
