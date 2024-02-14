<script>

export default {
    name: 'AppFooter',
}
</script>

<template>
    <section id="footer-top">
        <div class="container d-flex justify-content-center text-center">
            <div id="newsLetters">
                <div class="titleNewsletters">
                    <h2>Subscribe <span class="c-secondary">Newsletters</span></h2>
                </div>
                <p>Enter you email address to register to our newletter subscription delivered on a regular basis!</p>

                <div class="input-group">
                    <input type="email" class="form-control" placeholder="Enter your email">
                    <button class="btn" type="button">Subscribe</button>
                </div>
            </div>
        </div>
    </section>
    <section id="footer-bottom" class="bgc-grey">
        <div class="container">
            <div class="row">
                <div id="address" class="col-6">
                    <h3>Address</h3>
                    <p> 382 NE 191st # 87394 Miami, FL 33179-3899</p>
                    <p>+1(305)547-9909 (9am - 5pm EST, Monday - Friday)</p>
                    <p>support@maxcoach.com</p>
                    <div class="social-box">
                        <ul class="d-flex gap-4">
                            <li>fa</li>
                            <li>fa</li>
                            <li>fa</li>
                            <li>fa</li>
                        </ul>
                    </div>
                </div>

                <!-- TODO fare un components che come promp ha il numero di colonne -->
                <div id="info-box" class="col-6 d-flex">
                    <div>
                        <h3>Explore</h3>
                        <ul class="row row-cols-2">
                            <li class="col"><a href="#">Start here</a></li>
                            <li class="col"><a href="#">Blog</a></li>
                            <li class="col"><a href="#">About Us</a></li>
                            <li class="col"><a href="#">Success story</a></li>
                            <li class="col"><a href="#">Courses</a></li>
                            <li class="col"><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Information</h3>
                        <ul class="row row-cols-1">
                            <li class="col"><a href="#">Membership</a></li>
                            <li class="col"><a href="#">Purchase guide</a></li>
                            <li class="col"><a href="#">Privacy policy</a></li>
                            <li class="col"><a href="#">Terms of services</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="copyright d-flex justify-content-center py-3">
                <p>2020 Maxcoach. All Rights Reserved</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* #newsLetters {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 0
}
 */
#footer-top {
    padding: 100px;
}

#footer-bottom {
    padding: 80px;
}

.btn {
    background-color: #20AD96;
    padding: 15px 30px;
    color: white;
    font-weight: bold;
}

.form-control {
    background-color: #F5F5F5;
}

ul {
    margin: 0;
    padding: 0;
}

li {
    list-style-type: none;
    padding: 0;
}

.bgc-grey {
    background-color: #F8F8F8;
}

.titleNewsletters {
    color: #3F3A64;
}

.c-secondary {
    color: #20AD96;
}

.copyright {
    color: #ABABAB;
}

a {
    text-decoration: none;
    color: #000;
}
</style>