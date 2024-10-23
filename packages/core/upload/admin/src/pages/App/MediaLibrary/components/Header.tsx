import { useQueryParams, Layouts } from '@strapi/admin/strapi-admin';
import { Button, Flex, Link } from '@strapi/design-system';
import { ArrowLeft, Plus } from '@strapi/icons';
import { stringify } from 'qs';
import { useIntl } from 'react-intl';
import { useLocation, NavLink } from 'react-router-dom';

import { Breadcrumbs } from '../../../../components/Breadcrumbs';
import type { CrumbDefinition } from '../../../../components/Breadcrumbs/Breadcrumbs';
import type { Folder } from '../../../../../../shared/contracts/folders';
import { getTrad } from '../../../../utils';

export interface HeaderProps {
  breadcrumbs?: Array<CrumbDefinition> | boolean;
  canCreate: boolean;
  folder?: Folder | null;
  onToggleEditFolderDialog: ({ created }?: { created?: boolean }) => void;
  onToggleUploadAssetDialog: () => void;
}

export const Header = ({
  breadcrumbs = false,
  canCreate,
  folder = null,
  onToggleEditFolderDialog,
  onToggleUploadAssetDialog,
}: HeaderProps) => {
  const { formatMessage } = useIntl();
  const { pathname } = useLocation();
  const [{ query }] = useQueryParams();
  const backQuery = {
    ...query,
    folder:
      folder?.parent && typeof folder.parent !== 'number' && folder.parent.id
        ? folder.parent.id
        : undefined,
    folderPath:
      folder?.parent && typeof folder.parent !== 'number' && folder.parent.path
        ? folder.parent.path
        : undefined,
  };

  return (
    <Layouts.Header
      title={formatMessage({
        id: getTrad('plugin.name'),
        defaultMessage: `Media Library`,
      })}
      subtitle={
        breadcrumbs &&
        typeof breadcrumbs !== 'boolean' &&
        folder && (
          <Breadcrumbs
            // @ts-ignore
            tag="nav"
            label={formatMessage({
              id: getTrad('header.breadcrumbs.nav.label'),
              defaultMessage: 'Folders navigation',
            })}
            breadcrumbs={breadcrumbs}
            currentFolderId={folder?.id}
          />
        )
      }
      navigationAction={
        folder && (
          <Link
            tag={NavLink}
            startIcon={<ArrowLeft />}
            to={`${pathname}?${stringify(backQuery, { encode: false })}`}
          >
            {formatMessage({
              id: getTrad('header.actions.folder-level-up'),
              defaultMessage: 'Back',
            })}
          </Link>
        )
      }
      primaryAction={
        canCreate && (
          <Flex gap={2}>
            <Button startIcon={<Plus />} variant="secondary" onClick={onToggleEditFolderDialog}>
              {formatMessage({
                id: getTrad('header.actions.add-folder'),
                defaultMessage: 'Add new folder',
              })}
            </Button>

            <Button startIcon={<Plus />} onClick={onToggleUploadAssetDialog}>
              {formatMessage({
                id: getTrad('header.actions.add-assets'),
                defaultMessage: 'Add new assets',
              })}
            </Button>
          </Flex>
        )
      }
    />
  );
};
