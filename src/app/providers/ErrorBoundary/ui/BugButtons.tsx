import {Button} from "shared/ui/Button/Button"
import {useEffect, useState} from "react"
import {useTranslation} from "react-i18next"
interface BugButtonsProps {
  className?: string

}
// Компонент для тестирования ErrorBoundary
export const BugButtons = ({className}: BugButtonsProps) => {
  const [error, setError] = useState(false)
  const {t} = useTranslation()
  const onThrow = () => setError(true)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])
  return (
        <Button
            onClick={onThrow}
        >
            {t('throw error')}
        </Button>
  )
}
