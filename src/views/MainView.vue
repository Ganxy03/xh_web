<template>
    <div class="show-main">
        <el-aside v-if="shouldShowAside" style="height: 20%;float: left;width: 20%;">
            <common-side />
        </el-aside>
        <el-main style="float: left;">
            <router-view />
        </el-main>
        <div id="aplayer_bottom" style="text-align: left;">
            <pre class="aplayer-lrc-content">
[00:27.78]Sittin' here, breathing deeply, fucking  ready to go
[00:30.58]Been standing here blankly for an hour, can't say goodbye or hello
[00:33.83]It's like solitary confinement, just need someone to hold
[00:37.59]I'm not as brave as I'm portrayed, I need to be told to be bold
[00:41.00]Comin' in hot, I'm alone, no support
[00:43.70]Packed my bags, said hello to the airport
[00:45.13]I hope they board up my room and keep it empty
[00:46.80]Because fillin' my space ain't that damn easy
[00:48.53]My frontier awaits, I'm a soldier  solo
[00:50.90]Leaving all the past **** down below
[00:51.87]Movin' out, I've grown from a seed to a tree
[00:53.45]Gunna miss my friends and my family
[00:55.29]Taking off in the rain on a sketch plane
[00:58.24]Don't know where I'm going but I feel the pain
[01:01.73]Taking off from the pain in a sketch plane
[01:05.80]I've got nothing left to say
[01:08.69]Taking off in the rain on a sketch plane
[01:11.77]Don't know where I'm going but I feel the pain
[01:15.28]Taking off from the pain in a sketch plane
[01:18.66]I've got nothing left to say
[01:22.41]Grabbing ahold of my memories, tucking them away in my pocket
[01:25.69]I'll be the holder of the key to your heart shaped locket
[01:29.34]Now I know the pain remains but you gotta know I'm gunna return
[01:32.38]I'm like a dog run away from my home but there's a trail that's been burned for me to follow
[01:36.36]Back to you, to your arms, to your heart, to your soul
[01:39.36]I'll be bleeding from the inside out through your empty hole
[01:42.58]I'm scared as hell, to go out on my own
[01:45.76]You can wait by the door, by the window, until the day I come home
[01:49.76]Taking off in the rain on a sketch plane
[01:53.00]Don't know where I'm going but I feel the pain
[01:56.39]Taking off from the pain in a sketch plane
[01:59.70]I've got nothing left to say
[02:03.52]Taking off in the rain on a sketch plane
[02:06.60]Don't know where I'm going but I feel the pain
[02:10.10]Taking off from the pain in a sketch plane
[02:13.29]I've got nothing left to say
[02:16.63]Bridge
[02:17.32]I've got my ticket to click it
[02:19.40]Stick it out to the end
[02:20.47]Start the engine, leave my vengeance outside on the land
[02:23.24]I've got my ticket to click it
[02:24.61]Stick it out to the end
[02:27.23]Start the engine, leave my vengeance, got a new life to begin
[02:30.89]Taking off in the rain on a sketch plane
[02:34.50]Don't know where I'm going but I feel the pain
[02:37.56]Taking off from the pain in a sketch plane
[02:41.80]I've got nothing left to say
[02:44.52]No matter how far I go, I will never leave you
[02:46.46]I've got to show that I can flow like a pro in a different state and home
[02:51.50]Keep your feet on your track
[02:52.90]I'll keep my mind in line with the time
[02:55.20]And we'll be happy, living together and free in the blink of an eye
[02:58.60]I'm as content as I've ever been
[02:59.98]Not trippin' or slippin'
[03:01.56]I've been livin' life to the fullest, it's love I've been grippin'
[03:03.92]It's so strong I could leave for years and come back
[03:05.22]And nothing will have changed, except I'll be on your track
            </pre>
            <pre class="aplayer-lrc-content">
[00:00.00] 作词 : 梨冻紧/Wiz_H张子豪
[00:01.00] 作曲 : 梨冻紧/Wiz_H张子豪
[00:02.00] 编曲 : Wiz_ H
[00:03.00] 钢琴 : 梨冻紧
[00:04.00] 封面 : 蓝明初
[00:05.00] 混音 : 官硕
[00:06.00] 母带 : Mai＂ No Label Crew＂
[00:07.00] 监制 : Mai＂ No Label Crew＂
[00:08.00] 发行 : No Label Crew
[00:09.00] 企划 : 苏文嫒 张琛
[00:10.00] 营销企划：贾皓然 小盐 崇高
[00:30.60]我没转身
[00:31.71]一直走一直梦
[00:33.69]一直疯一直没停留
[00:37.83]那些美好的
[00:39.27]越靠近越沉溺
[00:41.22]越来越不想放手
[00:46.02]Wherever you go
[00:53.10]Wherever you go
[01:01.26]Follow
[01:02.04]每到晚上理智变得感性
[01:04.44]我编了这条短信
[01:05.67]说不在乎不过是我嘴硬
[01:07.65]总在期待你有什么反应
[01:09.48]对你没法保持那份冷静
[01:11.22]偷偷想着我们之间关系的远近
[01:13.23]我的心里没有任何的侥幸
[01:14.85]我知道我的爱对你来说就好像软禁
[01:16.74]我们都闭口不提
[01:18.42]这跨不过的距离
[01:20.04]我们不停的一再复习着
[01:22.02]那些感情里俗套的剧情
[01:23.76]你那里是怎么样的天气
[01:25.74]夜空是否还是那么透明
[01:27.51]我说的又开始不着了边际
[01:29.52]可是没有你我真的不行
[01:31.14]就请你
[01:32.19]把我当成贪得无厌
[01:34.11]把我当作得寸进尺
[01:35.79]每当难过表情在你脸上浮现
[01:37.65]我也难过得像照着一面镜子
[01:39.51]多么希望和你在一起的时间
[01:41.46]那些快乐可以突然静止
[01:43.26]多么希望时间可以快点
[01:44.97]带我和你一起体验生老和病死
[01:46.77]我想过下次会更好
[01:48.15]也开始更加了解你的脾气
[01:50.31]可是下次我们还是争吵
[01:52.02]下次可能还是不留余地
[01:54.00]我爱你不遗余力
[01:55.59]在爱里不停期待奇迹
[01:57.57]不忍看你这么痛苦
[01:59.25]又不愿离去
[02:00.69]And I will
[02:01.29]Follow
[02:01.83]一直走一直梦
[02:03.66]一直疯一直没停留
[02:07.83]那些美好的
[02:09.27]越靠近越沉溺
[02:11.19]越来越不想放手
[02:15.60]Wherever you go
[02:23.13]Wherever you go
[02:32.64]Wherever you go
[02:34.44]Wherever you go
[02:36.48]一直都搞不定自己的情绪在你走后
[02:40.05]Wherever you go
[02:41.88]just want you to know
[02:43.95]你知道我的心一直都在原地为你等候
[02:46.65]我其实对天气不感兴趣
[02:48.15]想知道你会不会太冷
[02:50.28]没法完成那份陪伴
[02:51.78]孤独你会不会在忍
[02:53.79]不知道想念你的痛苦
[02:55.50]来的到底会不会太准
[02:57.36]只知道当你不在床上
[02:59.25]我总是睡得不会太稳
[03:01.53]我们看惯了世间的罗生门
[03:03.45]变得好像陌生人
[03:05.28]两颗同样不安的心脏被塞进了同一个摩天轮
[03:09.06]每次拥抱停留在清晨
[03:10.98]窗外大雨在倾盆
[03:12.75]我们好像巨大城市里面两个相爱的外星人
[03:16.53]可我不想生活在套路里
[03:18.45]想把心事都告诉你
[03:19.86]我想要一直照顾你
[03:21.72]又总害怕你耗不起
[03:24.54]滴答的秒针又在
[03:26.16]提醒我爱你几分
[03:28.23]只要听到你的声音
[03:29.73]我一定会为你转身
[03:31.74]一直走一直梦
[03:33.66]一直疯一直没停留
[03:37.86]那些美好的
[03:39.27]越靠近越沉溺
[03:41.22]越来越不想放手
[03:45.63]Wherever you go
[03:53.89]Wherever you go
[04:01.36]本歌曲来自【青云 LAB】
            </pre>
            <pre class="aplayer-lrc-content">
[00:00.00] 作词 : Deep Side
[00:00.00] 作曲 : Deep Side
[00:00.00]Booty Music
[00:02.00]Deepside
[00:16.42]When the beat going like that (boom boom)
[00:18.39]Girl, I wanna put you up in my room
[00:20.38]I wanna put you up against that wall
[00:22.39]Throw you on the bed and take your clothes off (clothes off)
[00:24.70]Everybody don't like it slow (it slow)
[00:26.71]Consider me one of them folk
[00:28.40]Let's get to it (get to it)
[00:29.91]Do it (do it)
[00:30.93]Get to it (get to it)
[00:32.02]Get to it
[00:32.71]Kinda crunk and I'm off this scene
[00:34.36]A look back and that's my shit
[00:36.39]Once I had a shot of that good Petrone
[00:38.41]I'm all in my boxers like Bobby Jones
[00:40.72]Everybody don't like it slow (it slow)
[00:42.73]Consider me one of them folk
[00:44.41]And let's do it (do it)
[00:45.92]Do it (do it)
[00:46.63]Let's do it (do it)
[00:47.72]Let's do it
[00:48.73]Baby, that's the way I like it (hey)
[00:50.89]That's the way you like it (hey)
[00:52.89]That's the way we like it
[00:54.39]Making love to booty music
[00:56.76]Go Leo! It's your birthday (hey)
[00:58.63]Go Virgo! It's your birthday (hey)
[01:00.63]Go Pisces! It's your birthday
[01:02.40]Making love to booty music
[01:04.56]I feel it all in my bones
[01:06.42]Tryna keep up with that tempo
[01:08.50]Make it all night till your back gets sore
[01:10.42]Till we just can take it no more
[01:12.43]Look at that ass like "Oh my god"
[01:14.49]We clap back till you give me applause
[01:16.42]Sounded like (clap clap clap clap clap clap)Mhm…
[01:19.72]When I get in them drawers
[01:20.93]Get your hair in tangles
[01:22.89]I wrap it in my ankles
[01:25.20]I'm gripping on your handles
[01:26.95]I'm getting on different angles
[01:28.93]Like ten, five cent, ten cent, dollar
[01:30.92]Ten, five cent, ten cent, dollar
[01:32.84]Ten, five cent, ten cent, dollar
[01:34.88]Let me see you pop it (pop it)
[01:36.92]That's the way I like it (hey)
[01:38.85]That's the way you like it (hey)
[01:40.90]That's the way we like it
[01:42.37]Making love to booty music
[01:44.65]Go Aries! It's your birthday (hey)
[01:46.60]Go Libra! It's your birthday (hey)
[01:48.69]Go Scorpio! It's your birthday
[01:50.42]Making love to booty music
[01:52.94]Don't stop, get it, get it
[01:54.90]Pop that coochie, let me hit it
[01:56.90]I wanna rock, I wanna rock
[01:58.37]Let me get a little bit of that bumpy ride
[02:00.94]Don't stop, get it, get it
[02:02.91]Let me put some stank up in it
[02:04.94]I wanna rock, I wanna rock
[02:06.48]Let me get a little bit of that bumpy ride
[02:09.97](~~~~~Music~~~~~)
[02:12.75]Does anybody out there wanna
[02:14.44]Let me get a little bit of that bumpy ride
[02:16.60]Oooohh…
[02:23.73]Oooohh…
[02:24.43]Baby, that's the way I like it (hey)
[02:26.88]That's the way you like it (hey)
[02:28.86]That's the way we like it
[02:30.39]Making love to booty music
[02:32.61]Go Cancer! It's your birthday (hey)
[02:34.58]Go Capricorn! It's your birthday (hey)
[02:36.54]Go Aquarius! It's your birthday
[02:38.34]Making love to booty music
[02:40.89]That's the way I like it (hey)
[02:42.89]That's the way you like it (hey)
[02:44.88]That's the way we like it
[02:46.39]Making love to booty music
[02:48.73]Go Taurus! It's your birthday (hey)
[02:50.58]Go Gemini! It's your birthday (hey)
[02:52.59]Go Sag! It's your birthday
[02:54.38]Making love to booty music
[02:59.01]~~~END~~~
            </pre>
            <pre class="aplayer-lrc-content">
[00:00.000] 作词 : 齐秦/张震岳/MC HotDog 热狗
[00:00.697] 作曲 : 齐秦/张震岳/MC HotDog 热狗
[00:01.394]原词曲：齐秦/张震岳
[00:02.694]改编词曲：MC HotDog热狗
[00:11.195]张震岳：
[00:11.495]当你在穿山越岭的另一边
[00:15.676]我在孤独的路上没有尽头
[00:20.584]时常感觉你在耳后的呼吸
[00:25.969]却未曾感觉你在心口的鼻息
[00:31.567]Oh 思念是一种病
[00:36.836]Oh 思念是一种病
[00:43.324]一辈子有多少的来不及
[00:45.296]发现已经失去
[00:46.827]最重要的东西
[00:48.586]恍然大悟早已远去
[00:51.520]为何总是在犯错之后
[00:53.225]才肯相信错的是自己
[00:55.811]他们说这就是人生
[00:57.661]试着体会试着忍住眼泪
[01:01.228]还是躲不开应该有的情绪
[01:04.628]我不会奢求世界停止转动
[01:10.064]我知道逃避一点都没有用
[01:13.998]只是这段时间里尤其在夜里
[01:17.269]还是会想起难忘的事情
[01:20.649]我想我的思念是一种病
[01:23.894]久久不能痊愈
[01:25.170]MC HotDog热狗：
[01:25.470]有多少个夜 好像就这样归
[01:27.536]有多少个夜 她妆没卸了就睡
[01:30.144]她坠入了梦乡 她似乎忘了最初的梦想
[01:33.620]为何来到台北工作 她还在想
[01:36.266]她坐上了火车 托运了摩托车
[01:39.491]一间套房 一台电脑 就能让她活着
[01:41.944]如何博得好的生活
[01:43.965]但是台北居大不易 到现在还在斟酌
[01:47.061]夜深人静 天和人作战
[01:49.613]跟梦想交易 我拿出歌交换
[01:52.218]管你多有态度 你要不要吃饭
[01:54.613]又有谁会在乎 你人生早就习惯
[01:57.105]我也想要多留一会 但是我没有办法
[01:59.799]下一站早就step by step（要启程）
[02:01.810]工作day by day（一天天）
[02:03.406]远方的家人总是在问 你回来没
[02:05.844]很抱歉我现在必须和你说再见
[02:08.211]张震岳：
[02:08.512]当你在穿山越岭的另一边
[02:13.014]我在孤独的路上没有尽头
[02:18.036]时常感觉你在耳后的呼吸
[02:23.372]却未曾感觉你在心口的鼻息
[02:28.813]Oh 思念是一种病
[02:34.258]Oh 思念是一种病
[02:40.848]MC HotDog热狗：
[02:41.149]他站在黑夜里 街头的奖杯
[02:43.770]天晓得 他晓得 或许这是他的命
[02:45.865]没有人亏欠你 会帮你
[02:47.562]日子总是得要继续下去 他顶住压力
[02:50.584]为了混口饭吃 他总是站在这里等
[02:53.533]还据理力争 为了生活 他可以忍
[02:56.010]最寒冷的冬天就快过了 再撑一撑
[02:58.212]那写歌词的背后 只有一盏微弱的灯
[03:01.629]他遗憾地说 他又能改变什么
[03:04.286]仿佛早就木已成舟 早就习惯了这种生活
[03:07.319]图个温饱之外 有什么好埋怨好啰嗦
[03:10.302]他苦笑着说 他的人生早就被错过
[03:13.110]他不想再多说 为什么踏入这一行
[03:15.843]又能够做多久 他不知道
[03:18.622]那些伤心的往事
[03:21.026]为何总是忘不了又放不掉
[03:22.710]抬头他看到
[03:23.802]张震岳：
[03:24.103]当你在穿山越岭的另一边
[03:27.621]我在孤独的路上没有尽头
[03:32.733]时常感觉你在耳后的呼吸
[03:37.978]却未曾感觉你在心口的鼻息
[03:44.400]当你在穿山越岭的另一边
[03:48.991]我在孤独的路上没有尽头
[03:53.953]时常感觉你在耳后的呼吸
[03:59.323]却未曾感觉你在心口的鼻息
[04:04.674]Oh 思念是一种病
[04:09.110]一种病 它是一种病
[04:10.685]Oh 思念是一种病
[04:20.975]音乐监制：陈令韬
[04:21.375]混音：时俊峰
            </pre>
            <pre class="aplayer-lrc-content">
                [00:00.00] 作词 : 潘云安
[00:01.00] 作曲 : 潘云安
[00:02.00] 编曲 : 告五人
[00:18.23]
[00:46.82]形同虚设的时间
[00:50.32]在你眼里成为了无限
[00:54.19]青春充满了不眠
[00:57.71]是为了追寻更多的明天
[01:13.32]
[01:16.91]好似无尽的灯街
[01:20.29]从不分你我照亮在心间
[01:24.03]夜已承载心无眠
[01:27.79]再巨大的伤悲皆已成灰
[01:35.52]
[01:45.98]如果你还没有睡
[01:49.44]如果我还不停追
[01:53.15]如果清醒是种罪
[01:56.93]就把誓言带走 换承诺不回
[02:01.31]如果你就是一切
[02:04.35]如果我就是绝对
[02:08.12]如果清醒是种罪
[02:12.12]就让爱去蔓延 成全每个夜
[02:18.38]
[02:46.25]时过境迁的伤悲
[02:49.46]搭配快乐的宣泄
[02:53.19]如果清醒是种罪
[02:56.83]你会不会怨怼 将就的明天
[03:01.40]如果你就是一切
[03:04.52]如果我就是绝对
[03:08.29]如果清醒是种罪
[03:11.97]就让爱去蔓延 成全每个夜
[03:18.28]
[03:31.45]记住激情的滋味
[03:34.49]记住流泪的画面
[03:38.23]如果清醒是种罪
[03:41.98]就拿偏执的一切
[03:44.50]放弃无聊的称谓
[03:46.55]如果你真是一切
[03:49.43]如同我真是绝对
[03:53.09]如果夜留下暧昧
[03:57.46]让你我不再挂念
[03:59.42]最后成全每个谁
[04:14.24]

            </pre>
        </div>

    </div>
</template>

<script>
import CommonSide from '@/components/CommonSide.vue';
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
export default {
    data() {
        return {
            windowWidth: window.innerWidth,
            audio: [
                {
                    name: 'Sketch Plane',
                    artist: 'Cam Kelley',
                    url: 'http://ganxy03.cn/music/Sketch%20Plane.mp3',
                    cover: '',
                },
                {
                    name: '罗生门',
                    artist: '梨冻紧',
                    url: 'http://ganxy03.cn/music/%E7%BD%97%E7%94%9F%E9%97%A8.mp3',
                    cover: '',
                },
                {
                    name: 'Booty Music',
                    artist: 'Cam Kelley',
                    url: 'http://ganxy03.cn/music/Booty%20Music.mp3',
                    cover: '',
                },
                {
                    name: '思念是种病',
                    artist: 'Cam Kelley',
                    url: 'http://ganxy03.cn/music/%E6%80%9D%E5%BF%B5%E6%98%AF%E7%A7%8D%E7%97%85.mp3',
                    cover: '',
                },
                {
                    name: '带我去找夜生活',
                    artist: '告五人',
                    url: 'http://ganxy03.cn/music/%E5%B8%A6%E6%88%91%E5%8E%BB%E6%89%BE%E5%A4%9C%E7%94%9F%E6%B4%BB.mp3',
                    cover: '',
                },
            ],
            info_bottom: {
                fixed: true, // 不开启吸底模式
                listFolded: true, // 折叠歌曲列表
                autoplay: false, // 开启自动播放
                preload: "auto", // 自动预加载歌曲
                loop: "all", // 播放循环模式、all全部循环 one单曲循环 none只播放一次
                order: "random", //  播放模式，list列表播放, random随机播放
                lrcType: 2,
            },
        }
    },
    mounted() {
        this.initAudio();
    },
    created() {
        window.addEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        initAudio() {
            // eslint-disable-next-line no-unused-vars
            const ap = new APlayer({
                container: document.getElementById("aplayer_bottom"),
                audio: this.audio, // 音乐信息
                ...this.info_bottom, // 其他配置信息
            });
        }
    },
    computed: {
        shouldShowAside() {
            return this.windowWidth > 938;
        }
    },
    components: {
        CommonSide
    }
}
</script>

<style>
.show-main {
    width: 72%;
    margin: 0 auto;
}

@media screen and (max-width: 768px) {
    .show-main {
        width: 100%;
    }
}
</style>