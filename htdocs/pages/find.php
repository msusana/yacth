<?php include "../partiels/header.php"?>
<body>
    <section class="main">
    <?php include "../partiels/nav.php"?>
   
    <iframe class="margin-top-xs"src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d92549.2899211532!2d6.967073707385171!3d43.54059587440545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1syacht!5e0!3m2!1ses-419!2sfr!4v1618318258768!5m2!1ses-419!2sfr" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
     <?php include "../partiels/formRecherche.php"?> 
    
    <div class='bg-white text-center bg-opacity-50% margin-bottom-md padding-sm'>
     <h4 class="padding-sm">Résultats de votre recherche </h4>
     <button class="btn btn--primary" aria-controls="modal-name-1">Cliquez pour voir plus de photos</button>
    </div>
    <?php include "../partiels/modal.php"?>
    <div class='flexCards bg-white padding-md'>
       
       <?php   
$element = "<div class='cardBateau margin-xs'>
                <div class='BateauImg bg-cover bg-center bg-no-repeat '>
                    <h6 class='color-white'>Nom du Yacht-42 métres</h6>
                </div>
                    <div class='color-black bg-white bg-opacity-80% padding-xs text-xs'>
                        
                            <h6><span class='color-green'>📆 Disponible </span>  minimun 7 jours <span class='bg-white bg-contain paddingFlex radius-50% text-left'>50</span></h6>
                                <p class='margin-top-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestias, sint aspernatur.</p></br>
                            <div class='bateauInfo'>
                                <p>👥 12  ⚓ Port d'attache</p>
                                <div class='flex justify-end padding-xs'>
                                    <button class='btn btn--primary'>Book now</button>
                                    <a href='bateau.php'><button class='btn bkgOrange'>Savoir plus</button></a> 
                                </div>
                            </div>
                    </div>
            </div> ";
$count = 9;
for ($i = 0; $i < $count; $i++) {
echo $element;
}?>
     
       

</div>
</section>


    
</body>
<?php include "../partiels/footer.php"?>