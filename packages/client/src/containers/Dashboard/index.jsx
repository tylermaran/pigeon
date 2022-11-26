import Header from '../../components/Header';
import BaseContainer from '../../components/Containers';
import SectionContainer from '../../components/Section';

import {
	Column,
	ColumnWrapper,
	SubHeader,
	StyledUl,
	StyledLink,
} from './styledComponents';

const Dashboard = () => {
	return (
		<BaseContainer>
			<Header title="Dashboard" />
			<SectionContainer>
				<ColumnWrapper>
					<Column>
						<SubHeader>Welcome to Pigeon!</SubHeader>
						I've frequently run into the issue of wanting to email a
						subset of users out of a database.
						<br />
						<br />
						Usually I just run a query, and write a script to look
						though and send the notification. But I figured I could
						build a better solution!
						<br />
						<br />
						Right now there's no DB attached. Data connections/keys
						are stored in local storage, and sent along with
						queries.
						<SubHeader>State of development</SubHeader>
						<StyledUl>
							<li>
								<input
									type="checkbox"
									name="postgres"
									checked={true}
								/>
								<label for="postgres">Postgres support</label>
							</li>
							<li>
								<input
									type="checkbox"
									name="postmark"
									checked={true}
								/>
								<label for="postmark">Postmark support</label>
							</li>
							<li>
								<input type="checkbox" name="courier" />
								<label for="courier">Courier support</label>
							</li>
							<li>
								<input type="checkbox" name="mysql" />
								<label for="mysql">MySQL support</label>
							</li>
							<li>
								<input type="checkbox" name="database" />
								<label for="database">
									Add database / user permanence
								</label>
							</li>

							<li>
								<input type="checkbox" name="highlight" />
								<label for="highlight">
									Probably use{' '}
									<StyledLink
										href="https://www.npmjs.com/package/react-syntax-highlighter"
										target="_blank"
										rel="noreferrer"
									>
										react-syntax-highlighter
									</StyledLink>{' '}
									for the code highlighting:
								</label>
							</li>
							<li>
								<input type="checkbox" name="generic_get" />
								<label for="generic_get">
									Build out generic Datasouce (i.e. custom GET
									request)
								</label>
							</li>

							<li>
								<input type="checkbox" name="generic_post" />
								<label for="generic_post">
									Build out generic provider (i.e. custom POST
									request)
								</label>
							</li>

							<li>
								<input type="checkbox" name="post_send" />
								<label for="post_send">
									Add post send webhook (ex: log notification
									history back to db)
								</label>
							</li>

							<li>
								<input type="checkbox" name="pre_step" />
								<label for="pre_step">
									Add optional JS pre-steps (i.e. format data
									between SQL query and send)
								</label>
							</li>

							<li>
								<input type="checkbox" name="schedule" />
								<label for="schedule">
									Schedule send notifications
								</label>
							</li>

							<li>
								<input type="checkbox" name="email_history" />
								<label for="email_history">
									See email delivery history
								</label>
							</li>

							<li>
								<input type="checkbox" name="email_history" />
								<label for="email_history">
									Proxy incoming webhooks (i.e. delivery
									receipts){' '}
								</label>
							</li>

							<li>
								<input type="checkbox" name="db_hooks" />
								<label for="db_hooks">
									Db hooks, send a notification when a data
									source changes
								</label>
							</li>

							<li>
								<input type="checkbox" name="db_hooks" />
								<label for="db_hooks">
									<StyledLink
										href="https://github.com/tylermaran/pigeon/issues/new"
										target="_blank"
										rel="noreferrer"
									>
										Whatever else people suggest!
									</StyledLink>
								</label>
							</li>
						</StyledUl>
					</Column>
				</ColumnWrapper>
			</SectionContainer>
		</BaseContainer>
	);
};

export default Dashboard;
