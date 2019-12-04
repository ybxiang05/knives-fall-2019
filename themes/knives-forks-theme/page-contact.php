<?php

get_header(); ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">

	<?php while(have_posts()): the_post(); ?>
<article id="post-<?php the_ID(); ?>" <?php post_class( 'contact-wrapper' ); ?>>
	<header class="entry-header-contact">




	</header><!-- .entry-header -->


   


	<div class="entry-content">
	<h2>Looking for an opportunity? <br>
	We’d love to hear from you </h2> 
	<section class="contact-form-container"> 
	<?php the_content(); ?>

	<div class="media-enquiries"> 

<h3> Media Enquiries: </h3> 
<p> info@knivesandforks.ca </p>


<h3> Find us on social media! </h3> 
<span class="social-links">
						 <p>
						 <i class="fab fa-twitter"></i>	
						 <i class="fab fa-facebook-f"></i>	
						 <i class="fab fa-linkedin-in"></i>							
						 </p> 

						 </div>
						</span> 

						</div>

</section>



		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html( 'Pages:' ),
				'after'  => '</div>',
			) );
		?>


	</div><!-- .entry-content -->
</article><!-- #post-## -->
<?php endwhile; ?>




</main><!-- #main -->
</div><!-- #primary -->

<?php //get_sidebar(); ?>
<?php get_footer(); ?>