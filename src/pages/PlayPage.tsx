import {useTranslation} from "react-i18next";
import Title from "antd/lib/typography/Title";

const PlayPage = () => {
  const { t } = useTranslation();

  return (
    <Title level={2}>{t('Play')}!</Title>
  )
}

export {PlayPage};
