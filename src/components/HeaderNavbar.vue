<script>
export default {
    name: 'HeaderNavbar',
}
</script>

<template>
    <nav class="navbar navbar-expand-lg p-0">
        <div class="container">

            <!--* LOGO -->
            <a class="navbar-brand" href="#">
                <img src="../../public/img/dark-logo.png" alt="Logo" id="nav-logo">
            </a>

            <!--* NAV LINKS -->

            <div id="links">
                <ul class="links-ul">
                    <li class="li-bord">
                        <a href="#clienti">Home</a>
                        <div class="dropdown p-0" id="home-dropdown">
                            <div class="container py-4">
                                <div class="row">
                                    <div class="col-3">
                                        <ul class="flex-column gap-3 p-0">
                                            <li>
                                                <a href="#">MaxCoach Education</a>
                                            </li>
                                            <li>
                                                <a href="#">Course Portal</a>
                                            </li>
                                            <li>
                                                <a href="#">Distant Learning</a>
                                            </li>
                                            <li>
                                                <a href="#">Multimedia Pedagogy</a>
                                            </li>
                                            <li>
                                                <a href="#">Modern Schooling</a>
                                            </li>
                                            <li>
                                                <a href="#">Remote training</a>
                                            </li>
                                            <li>
                                                <a href="#">Health Coaching</a>
                                            </li>
                                            <li>
                                                <a href="#">Gym Coaching</a>
                                            </li>
                                            <li>
                                                <a href="#">Business</a>
                                            </li>
                                            <li>
                                                <a href="#">Artist</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-3">
                                        <ul class="flex-column gap-3">
                                            <li>
                                                <a href="#">Kitchen Coach</a>
                                            </li>
                                            <li>
                                                <a href="#">Motivation</a>
                                            </li>
                                            <li>
                                                <a href="#">Dancing</a>
                                            </li>
                                            <li>
                                                <a href="#">Guitar</a>
                                            </li>
                                            <li>
                                                <a href="#">Yoga</a>
                                            </li>
                                            <li>
                                                <a href="#">Photography</a>
                                            </li>
                                            <li>
                                                <a href="#">Personal Finance</a>
                                            </li>
                                            <li>
                                                <a href="#">Sales Coaching</a>
                                            </li>
                                            <li>
                                                <a href="#">Mental Theraphy</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-6">
                                        <img src="../../public/img/homepages-mega-menu-image-alt.jpg" alt="menu"
                                            class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="li-bord">
                        <a href="#funzioni">Pages</a>
                        <ul class="dropdown">
                            <li>
                                <a href="#">Star Here</a>
                            </li>
                            <li>
                                <a href="#">Success Story</a>
                            </li>
                            <li>
                                <a href="#">About me</a>
                            </li>
                            <li>
                                <a href="#">About us 01</a>
                            </li>
                            <li>
                                <a href="#">About us 02</a>
                            </li>
                            <li>
                                <a href="#">About us 03</a>
                            </li>
                            <li>
                                <a href="#">Contact me</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                            <li>
                                <a href="#">Purchase Guide</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Terms of Service</a>
                            </li>
                        </ul>
                    </li>
                    <li class="li-bord">
                        <a href="#piani">Courses</a>
                        <ul class="dropdown">
                            <li>
                                <a href="#">Courses Grid 01</a>
                            </li>
                            <li>
                                <a href="#">Courses Grid 02</a>
                            </li>
                            <li>
                                <a href="#">Courses Grid 03</a>
                            </li>
                            <li>
                                <a href="#">Membership Levels</a>
                            </li>
                            <li>
                                <a href="#">Became a Teacher</a>
                            </li>
                            <li>
                                <a href="#">Profile</a>
                            </li>
                            <li>
                                <a href="#">Checkout</a>
                            </li>
                            <li class="li-bord-s">
                                <a href="#">Single Layout</a>
                                <ul class="dropdown-s">
                                    <li>
                                        <a href="#" class="color-grey">Events</a>
                                    </li>
                                    <li>
                                        <a href="#" class="color-grey">Zoom Meetings</a>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="li-bord">
                        <a href="#piani">Features</a>
                        <ul class="dropdown">
                            <li>
                                <a href="#">Events</a>
                            </li>
                            <li>
                                <a href="#">Zoom Meetings</a>
                            </li>

                        </ul>
                    </li>
                    <li class="li-bord">
                        <a href="#piani">Blog</a>
                        <ul class="dropdown">
                            <li>
                                <a href="#">Blog Grid</a>
                            </li>
                            <li>
                                <a href="#">Blog Masonry</a>
                            </li>
                            <li>
                                <a href="#">Blog Classic</a>
                            </li>
                            <li>
                                <a href="#">Blog List</a>
                            </li>
                        </ul>
                    </li>
                    <li class="li-bord">
                        <a href="#piani">Shop</a>
                        <ul class="dropdown">
                            <li>
                                <a href="#">Shop Left Sidebar</a>
                            </li>
                            <li>
                                <a href="#">Shop Right Sidebar</a>
                            </li>
                            <li>
                                <a href="#">Cart</a>
                            </li>
                            <li>
                                <a href="#">Wishlist</a>
                            </li>
                            <li>
                                <a href="#">Single Product</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <!--! ICON -->
                        <span class="me-3">
                            <font-awesome-icon :icon="['far', 'circle-user']" />
                        </span>
                    </li>
                </ul>
            </div>

            <!--* SEARCHBAR -->
            <div class="input-group" id="search">

                <!--! INPUT -->
                <input type="text" class="form-control" placeholder="Search...">

                <!--* ICON -->
                <span class="input-group-text">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                </span>
            </div>


        </div>
    </nav>
</template>

<style lang="scss" scoped>
ul {
    list-style-type: none;
    margin: 0;
    display: flex;

}

#nav-logo {
    width: 158px;
    display: block;
    margin-right: 100px;

}

#links {
    width: 100%;
    display: flex;
    align-items: center;
    height: 70px;
    line-height: 70px;

}

#home-dropdown {
    transform: translate(-310px);
    width: 1200px;
}

.links-ul {
    gap: 50px;

}

nav {
    background-color: #fff;
    box-shadow: 5px 5px 5px rgba(219, 219, 219, 0.445);


    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
}

a {
    text-decoration: none;
    color: #000;
    font-size: 16px;
}

.dropdown,
.dropdown-s {

    background-color: #fff;
    padding: 30px;
    position: absolute;
    top: 100%;

    flex-direction: column;
    gap: 15px;

    transform: translate(-20px);
    visibility: hidden;

    li {
        height: 20px;
        width: 100%;
        line-height: 20px;
    }
}

.dropdown-s {
    left: 110%;
    top: 82%;
    padding-top: 10px;
}

.li-bord:hover .dropdown {
    visibility: visible;
}

.li-bord-s:hover .dropdown-s {
    visibility: visible;
}

.dropdown a,
.color-grey {
    color: grey;
}

a:hover {
    color: #000;
}
</style>