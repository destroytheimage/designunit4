import react from 'react'
import DefaultLayout from '../../components/DefaultLayout'
import Title from '../../components/Title'
import Article from '../../components/Article'
import Gallery from '../../components/Gallery'
import Image from '../../components/Image'

export default ({ children }) => (
    <DefaultLayout>
        <Title>ЙО’школа</Title>

        <Article>
            

        <ul>
            <p>Концепция образовательного IT кластера
                <br/>Йошкар-Ола, р. Марий Эл, Россия</p>
            
            <p>заказчик: iSpring</p>
            
            <p>2019 - концепция</p>

        </ul>

            <Image src='https://unit4.io/files/yoshkola/08.jpg'/>

            <p><i>“Каньон” и “Амфитеатр” - основное смысловое и событийное ядро образовательного центра - “знания” (школьный корпус) и “умения” (инфошкола) примыкают к нему и причастны событиям в нем.</i></p>

        </Article>
        <Article>

            <p><strong>КОНЦЕПЦИЯ</strong></p>
            <Image src='https://unit4.io/files/yoshkola/02.jpg'/>
            <Image src='https://unit4.io/files/yoshkola/01.gif'/> 
            <p>Пространственно-смысловая структура строится последовательными слоями.</p>
            <p>На Вознесенскую улицу выходит главный лицевой фасад, образованный пластиной компьютерных классов, естественно-научных лабораторий, фасадом актового и спортивного залов, по наземному этажу - кабинетами менеджеров, классами робототехники. Все это - помещения, наполненные людьми и деятельностью на протяжении всего дня и вечером - своего рода городской фасад, городской облик образовательного центра.</p>
                   
            <p>Собственно классы школы (начальной и средней, с учительскими) образуют уступчивый “склон”, обращенный к реке/школьному двору. Уступы “склона”, в свою очередь, образуют террасы с выходом из рекреаций и из каждого класса - можно проводить занятия на свежем воздухе, или просто раскрыть остекление для доступа свежего воздуха в класс. Классы и игровая начальной школы в наземном этаже выходят непосредственно на наружные площадки начальных классов школьного двора.</p> 
            <Image src='https://unit4.io/files/yoshkola/03.jpg'/>
            <p>Между пластиной городского фасада образовательного центра и уступами классов школьного блока расположен “Каньон” - главное социальное/событийное пространство образовательного центра. Образно оно напоминает одновременно и ущелье, и главный зал Хогвартса. Это центральное пространство включает рекреации школьного блока и компьютерных/лабораторных классов, вестибюль, актовый зал, лекционный зал, в него выходят кабинеты менеджеров и классы робототехники. В сценариях массовых событий пространство реконфигурируется так, что все причастные пространства могут быть активно или пассивно вовлечены в события.</p>
            <Image src='https://unit4.io/files/yoshkola/06.jpg'/>
            <p>Объемы спортивного зала, залов хореографии, атлетики, йоги и кластер кабинетов администрации образуют внутри общего пространства “Каньона” единый объем “Амфитеатра”, который может быть подразделен на разные сценарии одновременного использования, либо объединены в один. Кластер залов телесных практик имеет отдельный выход на Вознесенскую улицу и может быть доступен из города изолированно от остального объема образовательного центра. Над амфитеатром расположены “трубы” коммуникаций между рекреациями школьного корпуса и рекреациями компьютерных/лингафонных классов с естественно-научными лабораториями.</p>
            <Image src='https://unit4.io/files/yoshkola/04.jpg'/> 
            <p>“Каньон” и “Амфитеатр” - основное смысловое и событийное ядро образовательного центра - “знания” (школьный корпус) и “умения” (инфошкола) примыкают к нему и причастны событиям в нем.</p>
            <p>Кластер классов труда образует контур школьного двора, доступа в корпус общежития и отделяет школьный двор от шумной магистрали Ленинского проспекта.</p>


        </Article>

    </DefaultLayout>
)