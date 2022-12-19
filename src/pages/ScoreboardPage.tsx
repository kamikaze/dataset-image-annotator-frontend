import {useTranslation} from "react-i18next";
import Title from "antd/lib/typography/Title";

const ScoreboardPage = () => {
  const { t } = useTranslation();

  return (
    <Title level={2}>{t('Scoreboard')}</Title>
  )
}

export {ScoreboardPage};
