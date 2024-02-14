<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BlogsCard from './BlogsCard.vue'
export default {

    name: 'BlogsMain',
    components: {
        FontAwesomeIcon, BlogsCard
    },
    data: () => ({
        cards: [
            {
                id: 1,
                title: "Ten Benefits Of Rentals That May Change Your Perspective",
                subtitle: 'BUSINESS',
                value: 1790,
                imgpath: 'home-personal-finance-blog-03-480x352.jpg',
                date: 'Dec 28, 2020',
                views: '3,060'
            },
            {
                id: 2,
                title: "10 Things Successful Mompreneurs Do Different",
                subtitle: 'BUSINESS',
                value: 1790,
                imgpath: 'home-personal-finance-blog-02-480x352.jpg',
                date: 'Dec 28, 2020',
                views: '2,684'
            }

        ]
    }),
}

</script>

<template>
    <div id="blogs-main">
        <div class="container">
            <div class="row row-cols-3">
                <div class="col-4 py-4">
                    <h6>ENJOYABLE INSIGHT</h6>
                    <h5>Most Viewed <span>Best Blogs</span></h5>
                    <ul>
                        <li>
                            <a href="#">
                                <font-awesome-icon :icon="['fas', 'arrow-right']" class="me-1" />
                                Become a Better Blogger: Content Planning
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <font-awesome-icon :icon="['fas', 'arrow-right']" class="me-1" />
                                Promoting Your Online Business on Pinterest
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <font-awesome-icon :icon="['fas', 'arrow-right']" class="me-1" />
                                Gamification and Game-Based Learning
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <font-awesome-icon :icon="['fas', 'arrow-right']" class="me-1" />
                                Designing an Online Course from Expert’s Perspective
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <font-awesome-icon :icon="['fas', 'arrow-right']" class="me-1" />
                                Why Online Courses Are the Future of Education
                            </a>
                        </li>
                    </ul>
                </div>
                <BlogsCard v-for="card in cards" :key="card.id" :card="card" />
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
#blogs-main {
    background-color: #F5F1ED;
    padding: 120px 0;

    ul {
        list-style-type: none;
        padding: 0;
        margin: 30px 0;

        li {
            margin: 20px 0;
        }

        a {
            text-decoration: none;
            color: #3F3A64;
            font-size: 14px;
            font-weight: 700;
            transition: color 0.3s;
        }

        a:hover {
            color: #20AD96;
        }
    }
}

h5 {
    font-size: 30px;
    color: #3F3A64;
    font-weight: 700;
    margin: 20px 0;

    span {
        color: #20AD96;
        font-weight: 400;
    }

}

h6 {
    color: #8C89A2;
    font-size: 15px;
}
</style>
