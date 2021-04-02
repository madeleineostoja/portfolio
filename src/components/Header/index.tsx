import { css } from '@emotion/react';
import { ReactComponent as MailIcon } from '../../assets/icons/gmail.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg';
import { Link } from '../Link';
import { HamburgerIcon } from 'react-hamburger-icon';
import { Overlay } from 'react-portal-overlay';
import { useState } from 'react';
import { pageGrid } from '../../styles/mixins';
import { heading1 } from '../../styles/typesets';
import { mobile } from '../../styles/breakpoints';

const styles = {
  header: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-6);
  `,
  logo: css`
    font-weight: var(--font-weight-bold);
    font-size: var(--scale-1);
  `,
  nav: css`
    display: flex;
    align-items: center;
    & > *:not(:last-of-type) {
      margin-right: 1.5rem;
    }
    @media (max-width: ${mobile}) {
      display: none;
    }
  `,
  navIcon: css`
    width: var(--scale-1);
    height: var(--scale-1);
    @media (min-width: ${mobile}) {
      width: 1em;
      height: 1em;
    }
  `,
  hamburger: css`
    z-index: var(--layer-top);
    @media (min-width: ${mobile}) {
      display: none;
    }
  `,
  mobMenu: css`
    ${pageGrid}
    height: 100%;
    padding-top: var(--spacing-5);
    align: space-between;
    background: white;
  `,
  mobSocials: css`
    display: flex;
    align-items: center;
    justify-content: center;
    & > * {
      margin: 0 1rem;
    }
  `
};

/**
 * Global header for the site
 */
export function Header(props: any) {
  const [mobNavOpen, setMobNavOpen] = useState(false),
    closeMenu = () => setMobNavOpen(false);

  return (
    <>
      <header css={styles.header} {...props}>
        <Link href="/">
          <h1 css={styles.logo}>Madeleine Ostoja</h1>
        </Link>
        <nav css={styles.nav}>
          <Link href="https://twitter.com/madeleineostoja">
            <TwitterIcon css={styles.navIcon} />
          </Link>
          <Link href="https://instagram.com/filmic__">
            <InstagramIcon css={styles.navIcon} />
          </Link>
          <Link href="mailto:madi@madeleineostoja.com">
            <MailIcon css={styles.navIcon} />
          </Link>
          <Link href="https://madi.darkroom.tech">Prints</Link>
        </nav>
        <HamburgerIcon
          css={styles.hamburger}
          open={mobNavOpen}
          onClick={() => setMobNavOpen(!mobNavOpen)}
        />
      </header>

      <Overlay open={mobNavOpen} closeOnEsc={true} onClose={closeMenu}>
        <div css={styles.mobMenu}>
          <Link
            css={heading1}
            onClick={closeMenu}
            href="https://madi.darkroom.tech"
          >
            Prints
          </Link>
          <div css={styles.mobSocials}>
            <Link
              onClick={closeMenu}
              href="https://twitter.com/madeleineostoja"
            >
              <TwitterIcon css={styles.navIcon} />
            </Link>
            <Link onClick={closeMenu} href="https://instagram.com/filmic__">
              <InstagramIcon css={styles.navIcon} />
            </Link>
            <Link onClick={closeMenu} href="mailto:madi@madeleineostoja.com">
              <MailIcon css={styles.navIcon} />
            </Link>
          </div>
        </div>
      </Overlay>
    </>
  );
}
