import './services.css';

const Services = () => {
    return ( 
        <div id='services' className="services">
            <div className='services-wrapper'>
                <div className='services-description'>
                    <div className='services-title-wrapper'>
                        <h2 className='services-title'>
                            Услуги
                        </h2>
                    </div>
                    <div className='services-title-description-wrapper'>
                        <p>
                            Компания ООО «Это Софт» предлагает услуги по разработке и сопровождению
                            программного обеспечения. Мы создаем приложения, которые помогают клиентам
                            оптимизировать работу, экономить время и деньги. Сотрудничаем с отечественными и
                            иностранными партнерами.
                        </p>
                        <p>    
                            У нас есть опыт разработки решений в банковской сфере, торговле, здравоохранении,
                            промышленности, blockchain. Наша команда обладает квалификациями, как в области
                            разработки новых решений, так и в поддержке существующих.
                        </p>
                        <p>
                            Если вам необходимо реализовать уникальное программное решение, то мы имеем
                            внушительный опыт, как полного цикла (от построения архитектуры решения до ввода
                            в эксплуатацию), так и вхождения в проект на определённом этапе его развития.
                        </p>
                        <p>
                            Обладаем уникальным опытом миграции различных систем с устаревших технологий.
                            Мы участвуем в миграции крупных систем управления производством - проектируем
                            целевую арихтектуру и архитектуру миграции. Выстраиваем процессы разработки,
                            как небольших команд (5-10), так и крупных (до 50 человек).
                        </p>
                    </div>
                    <div className='services-title-wrapper'>
                        <h2 className='services-title'>
                            Разработка и сопровождение программного обеспечения.
                        </h2>
                    </div>
                    <div className='services-title-description-wrapper'>
                        <p>
                            Мы специализируемся на заказной индивидуальной разработке под нужды заказчика. <br/>
                            Все циклы разработки программного обеспечения - от построения архитектуры до последующего
                            технического сопровождения продукта.<br/>
                            Наш опыт включает в себя как разработку с чистого листа так и включение в проект на этапе разработки. <br/>
                        </p>
                        <h6>
                            Основные технологии для серверной разработки:
                        </h6>
                        <ul>
                            <li>
                                <code>Java</code>, <code>Spring Framework</code>
                            </li>
                            <li>
                                <code>Nodejs</code>, <code>expressjs</code>, <code>nestjs</code>, <code>Typescript</code>
                            </li>
                            <li>
                                <code>Kafka</code>, <code>Rabbit</code>, <code>Apache Artemis</code>, <code>Redis</code>, <code>Hazelcast</code>
                            </li>
                            <li>
                                <code>Keycloak</code>
                            </li>
                            <li>
                                <code>PostgreSQL</code>, <code>OracleDB</code>, <code>MySql</code>, <code>mongodb</code>
                            </li>
                            <li>
                                <code>OpenAPI/Swagger</code>
                            </li>
                        </ul>
                        <h6>
                            Основные технологии, используемые при разработке Frontend:
                        </h6>
                        <ul>
                            <li>
                                <code>Typescript</code>, <code>Vue</code>, <code>Vuex</code>, <code>React</code>, <code>Redux</code>, <code>MaterialUI</code>
                            </li>
                            <li>
                                <code>WebSocket</code>
                            </li>
                        </ul>
                    </div>
                    <div className='services-title-wrapper'>
                        <h2 className='services-title'>
                            Внедрение CI/CD в существующие проекты.
                        </h2>
                    </div>
                    <div className='services-title-description-wrapper'>
                        <p>
                            Мы обладаем богатым опытом внедрения современных практик CI/CD в существующие проекты.
                        </p>
                        <h6>
                            Технологии, которые мы использовали для реализации задач непрерывной интеграции и доставки:
                        </h6>
                        <ul>
                            <li>
                                <code>Docker</code>
                            </li>
                            <li>
                                <code>Kubernetes</code>, <code>Openshift</code>, <code>OKD</code>, <code>Amazon AWS</code>
                            </li>
                            <li>
                                <code>Gitlab CI/CD</code>, <code>Jenkins</code>
                            </li>
                            <li>
                                <code>SonarQube</code>
                            </li>
                        </ul>
                    </div>
                    <div className='services-title-wrapper'>
                        <h2 className='services-title'>
                            Тестирование программного обеспечения.
                        </h2>
                    </div>
                    <div className='services-title-description-wrapper'>
                        <p>
                            Наши специалисты обладают высокими навыками как ручного так и автоматизированного тестирования.
                        </p>
                        <h6>
                            Создание и сопровождение тесткейсов для различных сценариев использования (ручное либо
                            автоматизированное тестирование). Интеграция с системами управления тестированием.
                        </h6>
                        <ul>
                            <li>
                                <code>Java</code>, <code>JavaScript</code>, <code>Python</code>, <code>Cucumber</code>, <code>JBehave</code>, <code>Allure</code>, <code>Gitlab CI/CD</code>
                            </li>
                        </ul>
                    </div>
                    <div className='services-title-wrapper'>
                        <h2 className='services-title'>
                            Стоимость и порядок работ
                        </h2>
                    </div>
                    <div className='services-title-description-wrapper'>
                        <p>
                            Мы работаем как по модели Time &amp; Material так и по модели Fix Price.
                        </p>
                        <h6>
                            Конечная цена варьируется в зависимости от выбранной модели и сроков:
                        </h6>
                        <ul>
                            <li>
                                Стоимость наших услуг при модели Time &amp; Material - от 15&nbsp;000&nbsp;₽ и зависит от требуемой квалификации специалиста.
                            </li>
                            <li>
                                Стоимость при модели Fix Price - от 5&nbsp;000&nbsp;000&nbsp;₽ за проект.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Services;