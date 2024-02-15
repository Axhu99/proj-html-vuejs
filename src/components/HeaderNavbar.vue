<script>
export default {
    name: 'HeaderNavbar',
}
</script>

<template>
    <nav class="navbar navbar-expand-lg p-0">
        <div class="container justify-content-between">

            <!--* LOGO -->
            <a class="navbar-brand" href="#">
                <img src="../../public/img/dark-logo.png" alt="Logo" id="nav-logo">
            </a>

            <div class="d-flex align-items-center">
                <!--* NAV LINKS -->
                <div id="links">
                    <ul class="links-ul gap-4">
                        <li class="li-bord">
                            <a href="#clienti" class="li-link d-flex align-items-center gap-2">Home <font-awesome-icon
                                    :icon="['fas', 'angle-down']" class="fa-2xs" /></a>
                            <div class="dropdown p-0" id="home-dropdown">
                                <div class="container py-4">
                                    <div class="row" id="home-ul">
                                        <div class="col-3">
                                            <ul class="flex-column gap-3 p-0 home-ul">
                                                <li>
                                                    <a href="#">MaxCoach Education <span
                                                            class="badge text-bg-danger ms-2">HOT</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">Course Portal</a>
                                                </li>
                                                <li>
                                                    <a href="#">Distant Learning <span
                                                            class="badge text-bg-danger ms-2">HOT</span></a>
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
                                            <ul class="flex-column gap-3 home-ul">
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
                                                    <a href="#">Sales Coaching <span
                                                            class="badge text-bg-info text-light ms-2">NEW</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">Mental Theraphy <span
                                                            class="badge text-bg-info text-light ms-2">NEW</span>
                                                    </a>
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
                            <a href="#funzioni" class="li-link d-flex align-items-center gap-2">Pages <font-awesome-icon
                                    :icon="['fas', 'angle-down']" class="fa-2xs" /></a>
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
                            <a href="#piani" class="li-link d-flex align-items-center gap-2">Courses <font-awesome-icon
                                    :icon="['fas', 'angle-down']" class="fa-2xs" /></a>
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
                                    <a href="#" class="li-link d-flex align-items-center gap-2">Single Layout
                                        <font-awesome-icon :icon="['fas', 'angle-right']" class="fa-2xs" /></a>
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
                            <a href="#piani" class="li-link d-flex align-items-center gap-2">Features <font-awesome-icon
                                    :icon="['fas', 'angle-down']" class="fa-2xs" /></a>
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
                            <a href="#piani" class="li-link d-flex align-items-center gap-2">Blog <font-awesome-icon
                                    :icon="['fas', 'angle-down']" class="fa-2xs" /></a>
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
                            <a href="#piani" class="li-link d-flex align-items-center gap-2">Shop <font-awesome-icon
                                    :icon="['fas', 'angle-down']" class="fa-2xs" /></a>
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
                        <li class="li-bord">
                            <!--! ICON -->
                            <span class="me-3">
                                <font-awesome-icon :icon="['far', 'circle-user']" class="li-link fs-5 me-3" />
                            </span>
                        </li>
                    </ul>
                </div>

                <!--* SEARCHBAR -->
                <div class="input-group" id="search">

                    <!--! INPUT -->
                    <input type="text" class="form-control" placeholder="Search...">

                    <!--* ICON -->
                    <span class="input-group-text" role="button">
                        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="fw-bold" />
                    </span>
                </div>
            </div>



        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use '../assets/style/variables' as *;

input {
    background-color: #F5F5F5;
    border: 0;
    padding: 10px 20px;

}

.input-group-text {
    background-color: #F5F5F5;
    border: 0;
    color: #20AD96;
    padding: 0 20px;
}

.input-group-text:hover {
    color: #fff;
    background-color: $green ;

}

ul {
    list-style-type: none;
    margin: 0;
    display: flex;

}

#nav-logo {
    width: 158px;
    display: block;


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



.li-bord {
    cursor: pointer;

}

.li-link {
    transition: all 0.5s ease;

}

.li-bord:hover .li-link {
    color: $green;
    text-decoration: underline;
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

    background-color: $white;
    padding: 30px;
    position: absolute;
    top: 100%;
    border-bottom: 3px solid $green;


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

.li-bord:hover .dropdown,
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