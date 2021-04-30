 <?php include "partiels/header.php"?>
<body>
    <section class="main">
    <?php include "partiels/nav.php"?>
        
        <h1 class='text-center color-white margin-top-xl'>Welcome on board</h1>
        <p class='text-center color-white bg-black bg-opacity-80% textIndex margin-auto'>I want to be notified</p>
        <div class="container padding-y-md max-width-xxs">
            <div class="grid gap-xs">
                <label class="form-label margin-bottom-xxs color-white" for="input-email">Email:</label>
                    <input class="form-control col min-width-0" type="email" name="input-email" id="input-email" placeholder="email@myemail.com">
                        <button class="btn btn--primary col-content">Send</button>
            </div>
        </div>

        
        <p class='text-center color-white bg-black bg-opacity-80% textIndex margin-auto'> or sing-up </p>
        <button class="btn bkgOrange margin-center flex justify-center">Create on account</button>
    </section>

</body>
<?php include "partiels/footer.php"?>