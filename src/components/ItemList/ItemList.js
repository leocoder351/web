import React, { Component } from 'react';
import T from 'i18n-react';
import DrugTrace from '../../images/items_drug_trace.png';
import DrugApp from '../../images/items_drug_app.png';
import PalmPhar from '../../images/items_palm_pharmacy.png';
import './ItemList.css';

class ItemList extends Component {

  render() {

    T.setTexts({
      'drug-trace': {
        'name':                     '知药追溯',
        'descLine1':                '药品赋码，一件一码',
        'detailLine1':              '药品的唯一识别身份',
        'detailLine2':              '完全兼容国家药品电子监管码规则',
        'detailLine3':              '追溯流向，了解药品的所有动向'
      },

      'drug-app': {
        'name':                     '知药APP',
        'descLine1':                '公众查询药品信息，专业APP',
        'descLine2':                '扫一扫，安全用药',
        'detailLine1':              '用户更加方便快捷的了解药品信息',
        'detailLine2':              '忘记药品用法用量，扫一扫随时查看',
        'detailLine3':              '忘记之前用药的名称，打开历史记录即可查看',
        'detailLine4':              '扫描药品电子监管码获得药品信息，记录药品'
      },

      'palm-phar': {
        'name':                     '掌上药店',
        'descLine1':                '自由排版，一切随你',
        'descLine2':                '功能添加，看你心情',
        'detailLine1':              '专注于线下药店的你',
        'detailLine2':              '来开启线上新的渠道吧'
      },

    });

    return (
      <div className="user-item-list">
        <article className="user-item-article">
          <section>
            <p className="user-item-list-name">{T.translate('drug-trace.name')}</p>
            <p className="user-item-list-desc user-item-list-desc-last">{T.translate('drug-trace.descLine1')}</p>
            <p className="user-item-list-detail">{T.translate('drug-trace.detailLine1')}</p>
            <p className="user-item-list-detail">{T.translate('drug-trace.detailLine2')}</p>
            <p className="user-item-list-detail">{T.translate('drug-trace.detailLine3')}</p>
          </section>
          <img width="100%" alt="DrugTrace" src={DrugTrace}/>
        </article>

        <article className="user-item-article">
          <section>
            <p className="user-item-list-name">{T.translate('drug-app.name')}</p>
            <p className="user-item-list-desc">{T.translate('drug-app.descLine1')}</p>
            <p className="user-item-list-desc user-item-list-desc-last">{T.translate('drug-app.descLine2')}</p>
            <p className="user-item-list-detail">{T.translate('drug-app.detailLine1')}</p>
            <p className="user-item-list-detail">{T.translate('drug-app.detailLine2')}</p>
            <p className="user-item-list-detail">{T.translate('drug-app.detailLine3')}</p>
            <p className="user-item-list-detail">{T.translate('drug-app.detailLine4')}</p>
          </section>
          <img width="100%" alt="DrugApp" src={DrugApp}/>
        </article>

        <article className="user-item-article">
          <section>
            <p className="user-item-list-name">{T.translate('palm-phar.name')}</p>
            <p className="user-item-list-desc">{T.translate('palm-phar.descLine1')}</p>
            <p className="user-item-list-desc user-item-list-desc-last">{T.translate('palm-phar.descLine2')}</p>
            <p className="user-item-list-detail">{T.translate('palm-phar.detailLine1')}</p>
            <p className="user-item-list-detail">{T.translate('palm-phar.detailLine2')}</p>
          </section>
          <img width="100%" alt="PalmPhar" src={PalmPhar}/>
        </article>
      </div>
    );
  }
}

export default ItemList;
