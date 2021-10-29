import { Image } from '@components/ui/image';
import cn from 'classnames';
import Link from '@components/ui/link';
import { useSettings } from '@components/settings/settings.context';
import logo from '@assets/img/logo_CP.png';

const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  ...props
}) => {
  const {siteTitle } = useSettings();
  return (
    <span className="w-20 sm:w-40">
      <Link href="/" className={cn('inline-flex', className)} {...props}>
        <Image
          src={logo}
          alt={siteTitle || 'CompareSupplements Logo'}
          loading="eager"         
        />
      </Link>
      </span>
  );
};

export default Logo;
