<script setup lang='ts'>
import TeamMember from '@/components/team-member.vue'
import PaddedPage from '@/components/ui/padded-page.vue'
import boss from '@/assets/img/team/boss.jpg'
import danya from '@/assets/img/team/danya.png'
import misha from '@/assets/img/team/misha.png'
import stepa from '@/assets/img/team/stepa.png'
import anya from '@/assets/img/team/anya.png'

export type ITeamMember = {
  fullName: string,
  profession: string,
  imageSrc?: string
}

</script>

<template>
  <PaddedPage>
    <h1>Команда</h1>
    <div :class="$style.teamMembers">
      <TeamMember
        :full-name="'Адам Рожай'"
        :profession="'CEO'"
        :class="$style.teamMember"
        :photo-src="danya"
      />
      <TeamMember
        :full-name="'Якоб Михало'"
        :profession="'Арт-директор'"
        :class="$style.teamMember"
        :photo-src="misha"
      />
      <TeamMember
        :full-name="'Ален Стефанович'"
        :profession="'Продуктовый аналитик'"
        :class="$style.teamMember"
        :photo-src="stepa"
      />
      <TeamMember
        :full-name="'Ани Шуле'"
        :profession="'Продуктовый дизайнер'"
        :class="$style.teamMember"
        :photo-src="anya"
      />
    </div>

    <h1 :class="$style.title">
      CEO
    </h1>
    <div :class="$style.body">
      <p>Адам Рожай — непризнанный гений XXI века. В его карьере были времена ошеломительного успеха и славы, однако были и периоды абсолютного одиночества и изгнания, когда ни один человек в индустрии не хотел сидеть за одним столом с Адамом. Он смеялся и плакал, танцевал и дрался, шептал и гроулил. Он протаптывал свою тропу через жестокий мир шоу-бизнеса, полный скаммеров и извращенцев. Адам доподлинно знал одно: он был рожден для того чтобы принести в мир что-то особенное, но не понимал, блин, что именно.</p>
      <p>Его путь начался с самых низов: будучи официальным представителем группы “Лес”, он жил жизнью рок-звезды, не имел денег и принципов. Во время очередного мефедронового марафона к Адаму пришло осознание: за пределами зоны комфорта, полной быстрых и небезопасных удовольствий, его ждет огромный мир возможностей. С этого момента все изменилось: Адам порвал все связи с группой “ЛЕС” и вступил на тернистый и долгий путь поиска своего предназначения. Эстетика рок-фестивалей манила его со дня, когда Адам случайно оказался на “Алых Парусах 2005” и понял: он хочет быть большой частью этого процесса. Список музыкальных фестивалей, к созданию которых приложил руку Адам, впечатлит даже искушенного скептика: Lollapalooza, Glastonbury, Пикник Афиши, Coachella, НАШЕСТВИЕ, Боль, Ruskeala Symphony, Трэш твою мать!, Burning Man…</p>
      <p>Мир меняется, мы регулярно сталкиваемся со стрессом и тревогой и нуждаемся в возможности выплеснуть негативную энергию и побороть фрустрацию. Адам Рожай — человек, благодаря которому мир увидит что-то особенное, что-то, что удовлетворит ваши нужды и тайные желания…</p>
    </div>
    <img
      :src="boss"
      :class="$style.image"
    >

    <h1 :class="$style.title">
      Группы
    </h1>

    <h3 :class="$style.subtitle">
      Группа Крысы
    </h3>
    <p :class="$style.paragraph">
      Все участники Группы Крысы родом из Чехословакии. Они провели в нищете детство и остаются нищими до сих пор. Судьба разбросала их по разным углам Восточной Европы, однако одно остается неизменным: все участники группы хранят девственность и всегда готовы бросить вызов миру своими провокационными текстами и  душераздирающим музыкальным рядом. С недавних пор основной вокалист группы Влади Риепо скрывается от правосудия в погребе в Болгарии.
    </p>

    <h3 :class="$style.subtitle">
      Фьюрио
    </h3>
    <p :class="$style.paragraph">
      Группа Фьюрио — это туман на побережье океана ранним утром…  магическое сочетание бархатистого вокала и дерзких мелодий. Удастся ли Вам устоять перед манящими образами, которые причудливо вырисовываются в голове слушателя?
    </p>

    <h3 :class="$style.subtitle">
      Para Cuntuzi
    </h3>
    <p :class="$style.paragraph">
      Музыкальный коллектив “Para Cuntuzi” соткан из противоречий. Кого-то их треки могут сподвигнуть на признание в любви, на которое долго не хватало смелости, а для кого-то станут оглушающим ударом дроби по голове. Они и сами не знают, кто они, теряясь каждый раз, когда необходимо указать свой гендер.
    </p>

    <h3 :class="$style.subtitle">
      Клуб Пыли
    </h3>
    <p :class="$style.paragraph">
      “Клуб Пыли” — это группа, которую вы включите, когда на шумной тусовке отойдете покурить в наушниках с задумчивым выражением лица. Как бы хорошо Вам ни было большую часть своей жизни, в Вашем плейлисте “😥 Песни, когда мне грустно ☹️🚶” обязательно будет несколько треков группы “Клуб Пыли”.
    </p>

    <h3 :class="$style.subtitle">
      Пулярес
    </h3>
    <p :class="$style.paragraph">
      Очень хорошая группа. Реально нормальные пацаны и музыка приятная.
    </p>

    <h3 :class="$style.subtitle">
      Цейтнот
    </h3>
    <p :class="$style.paragraph">
      Тоже очень хорошая группа, только тут нет Вадима.
    </p>
  </PaddedPage>
</template>

<style module>
  .teamMembers {
    margin-top: 2em;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 2em;
  }
  .title {
    margin-top: 2em;
  }
  .subtitle {
    margin: 1em 0;
    color: var(--colorExtra);
  }
  .body {
    display: flex;
    margin-top: 1em;
    flex-direction: column;
    gap: 1em
  }
  .image {
    margin-top: 2em;
    width: 100%;
    object-fit: cover;
    display: flex;
  }
  .button {
    margin-top: 2em;
  }
</style>
